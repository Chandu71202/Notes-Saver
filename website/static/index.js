function deleteNode(noteId){
    fetch('/delete-node',
    {
        method: 'POST',
        body: JSON.stringify({ noteId: noteId})
    }).then((_res)=>{
        window.location.href="/";
    })
}