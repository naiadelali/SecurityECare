import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-mix',
  templateUrl: './lista-vidas.component.html',
  styleUrls: ['./lista-vidas.component.scss']
})
export class ListaVidasComponent {
   displayedColumns = ['id', 'nome', 'dt_nasc', 'dt_adm'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
  NOMES[Math.round(Math.random() * (NOMES.length - 1))] + ' ' +
  NOMES[Math.round(Math.random() * (NOMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    nome: name,
    dt_nasc: DT_NASC[Math.round(Math.random() * (DT_NASC.length - 1))],
    dt_adm: DT_ADM[Math.round(Math.random() * (DT_ADM.length - 1))],
    dt_dem: null,
    cpf:CPF[Math.round(Math.random() * (CPF.length - 1))],
    nitpis: PIS[Math.round(Math.random() * (PIS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const DT_NASC = ['01/01/1970', '01/01/1990'];
const CPF = ['084.687.557-88', '402.757.028-63'];
const PIS = ['123456789', '123456755'];
const DT_ADM = ['03/06/2014', '03/11/2014'];
const NOMES = ['José Bonifácio', 'Wescley Sudré', 'Naiade Lima', 'Augusto Pessoa', 'Rosa Almeira', 'Jack'];

export interface UserData {
  id: string;
  nome: string;
  dt_nasc: string;
  dt_adm: string;
  dt_dem: string;
  cpf: string;
  nitpis: string;

}