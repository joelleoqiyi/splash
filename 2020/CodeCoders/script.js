function switchType(textToUpdate) {
    $('#dropdownMenuButton').html(`Typing Format: ${textToUpdate}...`);
    $('#statement').val(textToUpdate);
}

function check(elements) {
    let info = [];
    for (const indivElement of elements) {
        if (indivElement.classList.contains('input-group')) {
            if (indivElement.getElementsByTagName("SELECT")[0]) {
                const selectInput = indivElement.getElementsByTagName("SELECT")[0];
                const chosenOption = selectInput.options[selectInput.selectedIndex].text;
                if (chosenOption == "Choose...") return false
                info.push(chosenOption)
            } else if (indivElement.getElementsByTagName("INPUT")[0]) {
                const textInput = indivElement.getElementsByTagName("INPUT")[0].value;
                if (textInput == '') return false
                info.push(textInput)
            }
        }
    }
    return info;
}

document.getElementById('add').addEventListener('click', () => {
    document.getElementsByClassName('info-entry')[0].classList.remove('hidden');
})

document.querySelectorAll('.question').forEach((el) => {
    el.addEventListener('change', e => {
        if (check(e.target.parentNode.parentNode.children)) {
            generate = document.getElementById('generate');
            generate.classList.remove('btn-outline-secondary');
            generate.classList.add('btn-outline-success');
            generate.disabled = false;
        }
    })
})

document.getElementById('generate').addEventListener('click', (e) => {
    const res = check(e.target.parentNode.parentNode.children)
    location.href = './codeEditor.html'
})
