document.addEventListener("DOMContentLoaded", function() {
    var buttonContainer = document.getElementById("buttonContainer");
    
    var buttons = [
        { text: "Socials", url: "socials.html", backgroundColor: "green" },
        // Add more buttons if needed
    ];
    
    kofiWidgetOverlay.draw('remthemusician', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#00bfa5',
        'floating-chat.donateButton.text-color': '#fff'
    });

    buttons.forEach(function(buttonInfo, index) {
        var button = document.createElement("button");
        button.textContent = buttonInfo.text;
        button.classList.add("custom-button");
        button.style.backgroundColor = buttonInfo.backgroundColor;

        button.addEventListener("click", function() {
            window.location.href = buttonInfo.url;
        });

        buttonContainer.appendChild(button);
    });
});
