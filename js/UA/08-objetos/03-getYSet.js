let persona = {

    nombre: 'Luis Enrique Arguelles',
    edad: 29,
    sexo: 'Hombre',
    celular: '8461012642',
    idioma:  'es',
    get lang ()  {
        return this.idioma.toUpperCase();
    },

    set lang (lang){
        this.idioma = lang.toUpperCase();
    }

}

persona.lang = 'uk';

console.log(persona.idioma);