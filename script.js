function Laptop(name, model, sid, productionYear, ram, rom, drive, weight){
    this.name = name;
    this.model = model;
    this.sid = sid;
    this.productionYear = productionYear;
    this.ram = ram;
    this.rom = rom;
    this.drive = drive;
    this.weight = weight;

    this.getRamRom = function() {
        return ('Размер ОЗУ: ' + ram + '\n'+ 'Размер ПЗУ: ' + rom);
    }
}

function Ultrabook(){
    Laptop.call(this);
    this.getModelInfo = function() {
        return ('Название ультрабука: ' + this.name + '\n' + 'Год изготовления: ' + this.productionYear);
    }

    var _weight = 0;

    this.setWeight = function(weight) {
        if(weight > 1500)
        throw 'Масса ультрабука не должна превышать 1500г';
        _weight = weight;
    }

    this.getWeight = function() {
        return _weight;
    }
}

var acer = new Laptop('Acer', 'M15', 1234, 2019, '4gb', '2gb', true, 2500);

var mac = new Ultrabook();

mac.name = 'MacBook';
mac.productionYear = 2015;
mac.setWeight(1500);

console.log(mac.getModelInfo());