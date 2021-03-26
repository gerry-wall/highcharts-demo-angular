/**
 * Chart Object Function
 *
 * @param title - String - title of the Axis
 * @param xAxis - Axis - xAxis Object
 * @param yAxis - Axis - y Axis Object
 * @param series - Array - Data Object
 * @param order - Integer - Order of appereance
 * @param overlay - Boolean - Overlaid
 * @param annotations - Annotation Array - List of Annotation
 * @return Chart Object
 */
function Chart(title, xAxis, yAxis, series, order, overlay, annotations) {
    var chart = {
        title: title,
        chart: {
            type: 'column',
            backgroundColor: null, // all charts will have transparent background
        },
        plotOptions: {
            column: {
            stacking: 'normal'
        }
        },
        xAxis: xAxis,
        yAxis: yAxis,
        series: series,
        annotations: annotations,
        order: order,
        overlay: overlay,
        tooltip:
            { enabled: false }
    }
    // console.log(JSON.stringify(chart));
    return chart;
}


/**
 * Axis Object Function
 *
 * @param title {Title} title of the Axis
 * @param categories {Array} Axis labels
 * @param opposite {Boolean} Show it on the opposite side of the Axis
 * @return Axis Object
 */
function Axis(title, opposite, categories) {
    var axis = {
        title: title || '',
        opposite: opposite || false,
        categories: categories
    }
    return axis;
}

/**
 * Title Object Function
 *
 * @param text - String - Text title
 * @param color - String - Could be Hexa or Name (CSS)
 * @return Title Object
 */
function Title(text, color) {
    var title = {
        text: text || '',
        style: {
            color: color || ''
        }
    }
    return title;
}

/**
 * Annotation Object Function
 *
 * @param text - String - Text title
 * @param color - String - Could be Hexa or Name (CSS)
 * @return Title Object
 */
function Annotation(id, text, point) {
    var annotation = {
        labels: [
        {
            //verticalAlign: 'top', top by default
            id: id,
            align: 'left',
            point:  {x: 0, y:0},
            xAxis: 4,
            yAxis: 4,
            shape: 'Rect',
            text: text
        }],
        labelOptions: {
            y: 0,
            allowOverlap: true
        },
        events: {
            dblclick: function(e) {
                chart = this.chart;
                chart.removeAnnotation(this);
            }
        }
    }
    return annotation;
}

/**
 * Serie Object Function
 *
 * @param xAxis {Integer} - xAxis Value (0 or 1)
 * @param yAxis {Integer} - yAxix Value (0 or 1)
 * @param type {String} - type of representation ('' for Stock, 'line', 'area')
 * @param name {String} - Name for the Serie Legend
 * @return Title Object
 */
function Serie(xAxis, yAxis, type, name, data, zindex){
    var serie = {
        xAxis: xAxis || 0,
        yAxis: yAxis || 0,
        type: type || '',
        name: name || '',
        data: data || [],
        zindex: zindex || 0
    }
    return serie
}