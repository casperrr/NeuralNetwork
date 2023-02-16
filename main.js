
function run(){

    let nn = new NeuralNetwork(2,2,1);
    let input = [1,0];
    let output = nn.feedforward(input);
    console.log(output);
}

function test1(){

    let a = new Matrix(1,2);
    let b = new Matrix(2,1);

    a.matrix[0][0] = 1;
    a.matrix[0][1] = 2;
    b.matrix = [[2],[4]];

    c = Matrix.dotProd(a,b);
    Matrix.print(c);

}