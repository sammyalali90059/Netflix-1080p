# Netflix-1080p

A simple chromium extension which enables netflix to play 1080p on Linux.

Netflix on Linux is limited to play content only up to 720p on Chrome,Firefox and Edge. However Opera supports 1080p. This extension spoofs your user agent on your Chromium-based browser to make it appear as Opera and allows 1080p playback on Linux. This extension is useful as it doesnt make you change your user agent each time you open chrome or having to change it through the terminal making it user friendly.

![image](https://github.com/user-attachments/assets/e4208d29-1c6f-451e-8f41-e534e275d129)


**1080p on Linux Chrome with the extension enabled**

![image](https://github.com/user-attachments/assets/4f039161-4d9a-4b85-b51e-fa1a0dbff4db)


**How it works**

This extension modifies your browser’s request headers to set a custom user agent:

        header: "User-Agent",
        operation: "set",
        value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 OPR/117.0.0.0"


**Installation guide**

Go to extensions, Load unpacked and select the extension folder.
