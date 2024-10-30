function show_topic(topic_name) {
    // Hide all topics
    var topics = document.getElementsByClassName('topic');
    for (var i = 0; i < topics.length; i++) {
        topics[i].style.display = 'none';
    }

    // Show the selected topic
    document.getElementById(topic_name).style.display = 'block';
}<script src="https://cdn.rawgit.com/naptha/tesseract.js/2.1.1/dist/tesseract.min.js"></script>
<script>
    function processImage() {
        const input = document.getElementById('image-input');
        const imgDisplay = document.getElementById('uploaded-image');
        const solutionText = document.getElementById('solution-text');

        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgDisplay.src = e.target.result;
                imgDisplay.style.display = 'block';

                // Run OCR on the image
                Tesseract.recognize(
                    e.target.result,
                    'eng',
                    {
                        logger: info => console.log(info) // Optional: log progress
                    }
                ).then(({ data: { text } }) => {
                    // Process the extracted text to generate a solution
                    solutionText.innerHTML = `Extracted Text: ${text}<br>Solution: This feature is coming soon!`;
                });
            }
            reader.readAsDataURL(input.files[0]);
        } else {
            solutionText.innerHTML = "Please upload an image.";
        }
    }
</script>
