import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  public currentItem = {name: 'NAME'};

  //X start first, always
  public xTurn: boolean = true;
  public X = 'X';
  public O = 'O';
  public EMPTY = '';

  public tttMatrix: string[][] = [
    [this.EMPTY,this.EMPTY,this.EMPTY],
    [this.EMPTY,this.EMPTY,this.EMPTY],
    [this.EMPTY,this.EMPTY,this.EMPTY]]

    public select(i:number, j:number) {
      this.setPlay(i,j);
      this.xTurn = !this.xTurn;
    }

    public setPlay(i:number,j:number) {
      if(this.tttMatrix[i][j] === this.EMPTY) {
        if(this.xTurn) {
          this.tttMatrix[i][j] = this.X;
        } else {
          this.tttMatrix[i][j] = this.O;
        }
      }
    }

    setUppercaseName(e:any) {
      console.table(e);
    }
}
