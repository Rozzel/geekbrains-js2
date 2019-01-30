class Product {
    constructor(name) {
        this.name = name;
    }
}

class Cheeseburger extends Product {
    constructor(name, size, filling, spice, mayonnaise) {
        super(name);
        this.size = size;
        this.filling = filling;
        this.spice = spice;
        this.mayonnaise = mayonnaise;
        this.priceRub = 0;
        this.kcal = 0;
    }
    calcSize() {
        if (this.size == 'big') {
            this.priceRub += 100;
            this.kcal += 40;
        } else if (this.size == 'little') {
            this.priceRub += 50;
            this.kcal += 20;
        }
    }
    calcFilling() {
        switch (this.filling) {
            case 'cheese':
                this.priceRub += 10;
                this.kcal += 20;
                break;
            case 'salad':
                this.priceRub += 20;
                this.kcal += 5;
                break;
            case 'potatoes':
                this.priceRub += 15;
                this.kcal += 10;
                break;
        }
    }
    calcSpice(){
        if (this.spice == 1) {
            this.priceRub += 15;
        }
    }
    calcMayonnaise(){
        if (this.mayonnaise == 1) {
            this.priceRub += 20;
            this.kcal += 5;
        }
    }
    calcAll(){
        this.calcSize();
        this.calcFilling();
        this.calcSpice();
        this.calcMayonnaise();
    }
}


/*
TZ

Некая сеть фаст-фудов предлагает несколько видов гамбургеров:
● маленький (50 рублей, 20 калорий);
● большой (100 рублей, 40 калорий).

Гамбургер может быть с одним из нескольких видов начинок (обязательно):
● сыром (+ 10 рублей, + 20 калорий);
● салатом (+ 20 рублей, + 5 калорий);
● картофелем (+ 15 рублей, + 10 калорий).

Дополнительно, гамбургер можно посыпать приправой (+ 15 рублей, 0 калорий) и полить майонезом (+ 20 рублей, + 5 калорий).

Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Используйте ООП подход


//Product
//Cheeseburger
    //size
        //little
        //big
    //filling
        //cheese
        //salad
        //potatoes
    //spice
    //mayonnaise

    //priceRub
    //kcal
*/