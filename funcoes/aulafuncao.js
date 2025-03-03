function My_name(name){
    return "Meu nome é " + name;
}



function maior_idade(idade){
    if(idade >= 18){
        console.log (My_name('kelvin') + ' e sou maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

maior_idade(18);