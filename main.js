class ProgressBarModel {

    constructor(maxValue, value = 0){
        this.maxValue = maxValue;
        this.value = 0;
        this.changeValue(value);
    }

    changeValue(amount){
        this.value += amount;
        this.checkValue();
    }

    checkValue(){
        if(this.value < 0){
            this.value = 0;
        }

        if(this.value > this.maxValue){
            this.value = this.maxValue;
        }
    }

    get percentage(){
        return this.value / this.maxValue * 100;
    }

}


class ProgressBarView {
    constructor(model, parentElem){
        this.model = model;
        this.parentElem = parentElem;
        this.progressBarFillElem = null;

        this.createCompoment();
        this.update();
    }

    createCompoment(){
        const progressBarElem = document.createElement('div');
        progressBarElem.classList.add('progress-bar');
        this.parentElem.append(progressBarElem);

        this.progressBarFillElem = document.createElement('div');
        this.progressBarFillElem.classList.add('progress-bar-fill');
        progressBarElem.append(this.progressBarFillElem);
    }

    update(){
        this.progressBarFillElem.style.width = `${this.model.percentage}%`;
    }
}

const progressBarContainer = document.querySelector('.progress-bar-container');

const pbm1 = new ProgressBarModel(100, 20);
console.log(pbm1);

const pbm2 = new ProgressBarModel(100, 60);
console.log(pbm2);

const pbv1 = new ProgressBarView(pbm1, progressBarContainer);
const pbv2 = new ProgressBarView(pbm2, progressBarContainer);

setInterval(() => {
    let randomValue = Math.floor(Math.random(10)) + 1;
    randomValue = Math.random() > 0.5 ? randomValue : -randomValue;

    pbm1.changeValue(randomValue);
    pbv1.update();


    randomValue = Math.floor(Math.random(10)) + 1;
    randomValue = Math.random() > 0.5 ? randomValue : -randomValue;

    pbm2.changeValue(randomValue);
    pbv2.update();
}, 500)
