function greet(name: string | null | undefined): void {
    if (name) console.log(name.toUpperCase());
    else console.log('Hola!');
}

greet(undefined);