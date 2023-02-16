
function sigmoid(x){
    return 1/(1+Math.exp(-x));
}

class NeuralNetwork{

    constructor(inputN,hiddenN,outN){
        this.inputN = inputN;
        this.hiddenN = hiddenN;
        this.outN = outN;
        
        this.weights_ih = new Matrix(this.hiddenN,this.inputN);
        this.weights_ho = new Matrix(this.hiddenN,this.outN);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        this.bias_h = new Matrix(this.hiddenN,1);
        this.bias_o = new Matrix(this.outN,1);
        this.bias_h.randomize();
        this.bias_o.randomize();


    }

    feedforward(inputArr){

        //Input to hiden
        let input = Matrix.fromArray(inputArr);
        let hidden = Matrix.dotProd(this.weights_ih,input)
        hidden.add(this.bias_h);
        //Activation function
        hidden.map(sigmoid);

        //Hidden to output
        let output = Matrix.dotProd(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        return output.toArray();


    }

}