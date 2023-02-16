

class Matrix{

    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;
        this.matrix = [];
        
        for (let i = 0; i < this.rows; i++){
            this.matrix[i] = [];
            for(let j = 0; j < this.cols; j++){
                this.matrix[i][j] = 0;
            }
        }

    }

    randomize(){
        for (let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                 this.matrix[i][j] = Math.random()*2 -1;
            }
        }
    }

    add(n){
        if (n instanceof Matrix){
            for (let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.matrix[i][j] += n.matrix[i][j];
                }
            }
        }else{       
            for (let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.matrix[i][j] += n;
                }
            }
        }
    }

    mult(n){
        if (n instanceof Matrix){
            for (let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.matrix[i][j] *= n.matrix[i][j];
                }
            }
        }else{       
            for (let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.matrix[i][j] *= n;
                }
            }
        }
    }

    static dotProd(a,b){
        let newMatrix = new Matrix(a.rows,b.cols);

        for(let i = 0; i < a.rows; i++){            
            for(let j = 0; j < b.cols; j++){
                let value = 0;
                for(let k = 0; k < a.cols; k++){            
                    value += a.matrix[i][k]*b.matrix[k][j];
                }
                newMatrix.matrix[i][j] = value;
            }
        }
        return newMatrix;

        
    }

    transpose(){
        let newMatrix = new Matrix(this.cols,this.rows);

        for (let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                newMatrix.matrix[j][i] = this.matrix[i][j];
            }
        }
        return newMatrix;
    }

    map(func){
        //apply function to matrix
        for (let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                let val = this.matrix[i][j];
                this.matrix[i][j] = func(val);
            }
        }
    }

    static fromArray(arr){
        let m = new Matrix(arr.length,1);
        for(let i = 0; i < arr.length; i++){
            m.matrix[i][0] = arr[i];
        }
        return m;
    }

    toArray(){
        let arr = [];
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                arr.push(this.matrix[i][j]);
            }
        }
        return arr;
    }

    static print(mat){
        console.table(mat.matrix);
    }



}


function test1(){

    let a = new Matrix(2,3);
    let b = new Matrix(3,2);
    
    a.randomize(10);
    console.table(a.matrix);
    b.randomize(10);
    console.table(b.matrix);
    
    let c = Matrix.dotProd(a,b)
    console.table(c.matrix);
}

function test2(){
    let a = new Matrix(2,5);
    a.randomize(10);
    console.table(a.matrix);
    b = a.transpose();
    console.table(b.matrix)
}