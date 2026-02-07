$allDirs = Get-ChildItem -Path "(calculators)" -Directory | Select-Object -ExpandProperty Name
$dirsWithLayout = Get-ChildItem -Path "(calculators)" -Filter "layout.tsx" -Recurse | ForEach-Object { $_.Directory.Name } | Select-Object -Unique
$filesWithLegacy = Select-String -Path "(calculators)\*\HubClient.tsx", "(calculators)\*\page.tsx", "(calculators)\*\*\page.tsx" -Pattern "min-h-screen bg-slate-900" -List | ForEach-Object { $_.Path }

$dirsWithLegacy = $filesWithLegacy | ForEach-Object { 
    $parts = $_ -split "\\"
    $index = $parts.IndexOf("(calculators)")
    if ($index -ge 0 -and $index -lt $parts.Length - 1) { $parts[$index + 1] }
} | Select-Object -Unique

$noLayout = $allDirs | Where-Object { $dirsWithLayout -notcontains $_ -and $_ -ne "category" }
$needsPurge = $dirsWithLayout | Where-Object { $dirsWithLegacy -contains $_ }
$standardized = $dirsWithLayout | Where-Object { $dirsWithLegacy -notcontains $_ }

Write-Host "### 1. NO LAYOUT (Top-Down Required) [$($noLayout.Count)]"
$noLayout | Sort-Object | ForEach-Object { "- $_" }
Write-Host "`n### 2. HAS LAYOUT BUT NEEDS PURGE (Purge Required) [$($needsPurge.Count)]"
$needsPurge | Sort-Object | ForEach-Object { "- $_" }
Write-Host "`n### 3. FULLY STANDARDIZED (S-Class Verified) [$($standardized.Count)]"
$standardized | Sort-Object | ForEach-Object { "- $_" }
