var jumattribut=7;var yes=">50K";var no="<=50K";var train=[];
function hitung(cell,i,x){
    return train.filter(function(a){return (a[i]==cell[i] && a[8]==x)}).length / train.filter(function(a){return a[8]==x}).length;
}
function getc(){
    return train.filter(function(a){return a[8]==yes}).length/train.length;
}
function prob(cell,x){
    var jum= (x == yes ? getc() : (1-getc()));
    for (var i=0; i<jumattribut; i++) jum*=hitung(cell,i+1,x);
    return jum;
}
function getlabel(cell){
    return prob(cell,yes) > prob(cell,no) ? yes : no;
}
function preproses(cell){
    train.push(cell);
}