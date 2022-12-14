// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue

createApp({
    data() {
        return {
            newTask : '',
            toDoList : [
                    {
                        text: 'fare i compiti', 
                        done: false
                    }, 
                    {
                        text: 'fare la spesa', 
                        done: true
                    }, 
                    {
                        text: 'fare il bucato', 
                        done: false
                    },
                    {
                        text: 'fare l\'esercizio', 
                        done: false 
                    },
                    ]
        }
    },
    methods : {
        addNewTask(content){
            if (content != '' && content.length >= 10 && (!this.toDoList.some(item => item.text === content))) {
                this.toDoList.push({text : content, done : false});
                this.clearUserInput();
            } else {
                alert('Syntax error when entering the task.')
            }
        },
        clearUserInput(){
            this.newTask = '';
        },
        removeTask(taskToRemove){
            const taskIndex = this.toDoList.indexOf(taskToRemove);
            if (taskIndex > -1) {
                this.toDoList.splice(taskToRemove, 1);
            }
        }
    }
}).mount('#app')