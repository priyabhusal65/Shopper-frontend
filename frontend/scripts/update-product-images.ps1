$ErrorActionPreference = 'Stop'

function SanitizeName($s) {
    $s = $s.ToLower()
    $s = $s -replace "'", ""
    $s = $s -replace "&", "and"
    $s = $s -replace "[^a-z0-9]+", "-"
    $s = $s.Trim('-')
    return $s
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$assetsDir = Join-Path $repoRoot 'src\Components\Assets'
$allProductsPath = Join-Path $assetsDir 'all_product.js'

if (-not (Test-Path $allProductsPath)) {
    throw "Cannot find all_product.js at $allProductsPath"
}

$lines = Get-Content -LiteralPath $allProductsPath -Raw -Encoding UTF8 -ErrorAction Stop -Delimiter "`0" # read as one string
$lines = ($lines -split "`n")

$currentId = $null
$currentName = $null

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]

    $idMatch = [regex]::Match($line, '\bid\s*:\s*(\d+)\s*,')
    if ($idMatch.Success) { $currentId = $idMatch.Groups[1].Value }

    $nameMatch = [regex]::Match($line, 'name\s*:\s*"([^"]+)"\s*,')
    if ($nameMatch.Success) { $currentName = $nameMatch.Groups[1].Value }

    $imgMatch = [regex]::Match($line, '^(\s*)image\s*:\s*"([^"]+)"\s*,\s*$')
    if ($imgMatch.Success -and $currentName -and $currentId) {
        $indent = $imgMatch.Groups[1].Value
        $url = $imgMatch.Groups[2].Value
        $safeName = SanitizeName $currentName
        $fileName = "$currentId-$safeName.png"
        $outPath = Join-Path $assetsDir $fileName

        if (-not (Test-Path $outPath)) {
            try {
                Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing -TimeoutSec 30
            } catch {
                Write-Warning "Failed to download $url -> $fileName: $_"
            }
        }

        $requirePath = "./$fileName"
        $lines[$i] = "$indent" + 'image: require("' + $requirePath + '"),' 
    }
}

Set-Content -LiteralPath $allProductsPath -Value ($lines -join "`n") -Encoding UTF8
Write-Host "Updated all_product.js to use local images and downloaded any missing files to $assetsDir"




