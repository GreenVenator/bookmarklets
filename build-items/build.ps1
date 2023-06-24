If (!(test-path out))
{
    mkdir -p out;
}
gci | ? {$_.Name -match '\.js$'} | % { 
    $content = Get-Content $_ -Raw;
    $encodedContent = [uri]::EscapeDataString("(function(){$($content.trim())})();");
    $js = "javascript:${encodedContent}";
    Out-File -FilePath ".\out\$($_.Name)" -InputObject $js
}