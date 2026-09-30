//SISTEMA DE NOTAS DE MARKDOWN

function generateID(){
    const timestamp = Date.now(); //devuelve los milisegundos transcurridos desde 1970
    return timestamp;    
}

//FUNCIONES CRUD
function createNote(content, title){
    const trimmedContent = content.trim();
    if(trimmedContent === ''){
        return 'Error: El contenido no puede estar vacio.'
    }

    const noteID = generateID();
    const currentTime = Date.now();
    let noteTitle = title;
    if (noteTitle === undefined || noteTitle === null || noteTitle === '') {
        noteTitle = deriveTitle(content);
    }
    const noteExcerpt = deriveExcerpt(content, 100);
    
    const note = {
    id: noteId,
    content: content,
    title: noteTitle,
    excerpt: noteExcerpt,
    createdAt: currentTime,
    updatedAt: currentTime,
    favorite: false,
    };

    return note;

}