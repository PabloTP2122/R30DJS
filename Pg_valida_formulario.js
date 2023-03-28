function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    //Datos requeridos
    const reqData = ['name', 'lastname', 'email', 'password'];
    const alreadyReg = registeredUsers.some(function(element) {
        return element.email === formData.email;
    });
    if (alreadyReg)
        throw new Error(`El mail ya existe: ${formData.email}`);
    /* Object.keys(formData)
    Retorna un array de las propiedades del objeto.
    formData = [name,lastname,email,password]
    !Object.keys(formData) => boolean
    includes(reqDatum) => boolean
    ¿Cuál no está incluido en formData? => !Object.keys(formData)
    */
    const missingData = reqData.filter(reqDatum => !Object.keys(formData).includes(reqDatum));
    if (!!missingData.length)
        throw new Error(`Faltan los siguientes campos: ${missingData}`)
            // Destructuración 
    const { name, lastname, email } = formData;
    registeredUsers.push({ name, lastname, email })
    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`
}

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
}

const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

validateForm(formData, registeredUsers)