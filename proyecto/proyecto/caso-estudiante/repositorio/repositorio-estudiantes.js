export class RepositorioEstudiante{ 
    constructor(){ 
        this.estudiantes=[ ]
    }
    addEstudiantes(estudiantes){
        this.estudiantes.push(estudiantes)
      }
    
      buscarEstudiante(N_Matricula) {
        return this.estudiantes.filter((item) => item.N_Matricula === N_Matricula).shift()
      }
}