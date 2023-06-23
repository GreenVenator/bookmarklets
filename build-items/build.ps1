$jsPath = "build-items/build-bookmarklet.js";
mkdir -p out;
gci | ? {$_.Name -match '.js$'} | % { $content = Get-Content $_ -Raw; $js = run-func $jsPath build $_; Out-File -FilePath ".\out\$($_.Name)" -InputObject $js}