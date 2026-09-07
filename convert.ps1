Add-Type -AssemblyName System.Drawing

$files = @(
    "Andhra.png", "Arunachal.png", "Gujrat.png", 
    "Maharashtra.png", "himachal.png", "sikkim.png", 
    "konark.png", "Kainchi-Dham.png", "Srilanka.png"
)

foreach ($file in $files) {
    $path = "public\assets\$file"
    if (Test-Path $path) {
        $resolved = (Resolve-Path $path).Path
        $src = [System.Drawing.Bitmap]::FromFile($resolved)
        
        $MaxWidth = 1200
        $width = $src.Width
        $height = $src.Height
        
        if ($width -gt $MaxWidth) {
            $height = [int]($height * ($MaxWidth / $width))
            $width = $MaxWidth
        }
        
        $dest = New-Object System.Drawing.Bitmap $width, $height
        $graphics = [System.Drawing.Graphics]::FromImage($dest)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $graphics.DrawImage($src, 0, 0, $width, $height)
        $src.Dispose()
        
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]80)
        
        $jpgPath = $resolved.Replace(".png", ".jpg")
        $dest.Save($jpgPath, $codec, $encoderParams)
        $graphics.Dispose()
        $dest.Dispose()
        
        Remove-Item $resolved -Force
        Write-Host "Converted and optimized $file to JPG."
    }
}
