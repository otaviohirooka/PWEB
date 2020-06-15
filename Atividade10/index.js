const validData = () => {
    const name = document.forms["newForm"]["name"].value
    const email = document.forms["newForm"]["email"].value
    const form = document.forms["newForm"]["reply"].value

    if (name == "" || email == "") {
        alert("Informe o nome e o email")
        return false
    }

    if (form == "sim") {
        alert("Muito bom vê-lo novamente, volte sempre!")
    } else {
        alert("Seja bem vindo. Volte em breve!")
    }
}