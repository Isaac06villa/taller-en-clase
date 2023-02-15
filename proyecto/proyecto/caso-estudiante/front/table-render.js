export class RenderTemplate {
    constructor(listEstudiantes) {
      this.listEstudiantes = listEstudiantes
    }
    render() {
  
      const items = this.listEstudiantes.map((item) => {
        return `<tr>
              <td>${item.N_Matricula}</td>
              <td>${item.nombre}</td>
              <td>${item.apellido}</td>
              <td>M</td>
              <td>02-03-1986</td>
              <td>02-15-2023</td>
          </tr>`
      }).join('')
  
      return items
    }
  }