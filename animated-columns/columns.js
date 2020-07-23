const doDrawing = () => {
    var c = document.getElementById("canvas");
    
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    var ctx = c.getContext("2d");    

    drawGraphTop(50, 5, 500);

    drawColumn(100, 500, 4, 'January');
    drawColumn(150, 350, 5, 'February');
    drawColumn(200, 150, 6, 'March');
}

function getContext() {
    var c = document.getElementById("canvas");    
    var ctx = c.getContext("2d");        

    return ctx;
}

const drawGraphTop = (top, interval, width) => {
    let ctx = getContext();

    ctx.beginPath();
    ctx.rect(1, top, width, 2);

    let stage = width / interval;

    for (let i = 0; i <= interval; i++) {
        ctx.rect(i * stage, top, 2, 5);
    }
    ctx.stroke();
}

const drawColumn = (top, target, speed, label) => {
    let ctx = getContext();

    let x = 10;    
    let directionHorizontal = speed;

    let intervalHandle = setInterval(() => {
        const buffer = 15;
        const height = 30;
        let showText = false;

        ctx.beginPath();
        ctx.clearRect(1, top - 1, target + buffer + Math.abs(directionHorizontal) + 2, height + 2);
        console.log('ctx.clearRect directionHorizontal: ' + directionHorizontal + ', top ' + top);

        if (directionHorizontal === 1 && x <= target + buffer) {
            
        } else if (directionHorizontal > 0 && x >= target + buffer) {
            directionHorizontal = -1;
        } else if (directionHorizontal < 0 && x <= target) {
            clearInterval(intervalHandle);
            directionHorizontal = 0;

            showText = true;            
        }

        x += directionHorizontal;

        ctx.rect(1, top, x, height);
        console.log('ctx.rect top ' + top + ', x ' + x);

        ctx.stroke();

        if (showText) {                        
            ctx.fillText(label, 10, top + 20);
            console.log('ctx.fillText label: ' + label + ', top ' + top);
        }

    }, 1);
    
}