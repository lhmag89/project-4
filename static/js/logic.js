// Add data column names to dropdown
let columns = ['id', 'diagnosis', 'radius_mean', 'texture_mean', 'perimeter_mean',
'area_mean', 'smoothness_mean', 'compactness_mean',
'concavity_mean', 'concave points_mean', 'symmetry_mean',
'fractal_dimension_mean', 'radius_se', 'texture_se',
'perimeter_se', 'area_se', 'smoothness_se', 'compactness_se',
'concavity_se', 'concave points_se', 'symmetry_se',
'fractal_dimension_se', 'radius_worst', 'texture_worst',
'perimeter_worst', 'area_worst', 'smoothness_worst',
'compactness_worst', 'concavity_worst', 'concave points_worst',
'symmetry_worst', 'fractal_dimension_worst'];
for (let i=2; i<columns.length; i++){
	let dropdownListx = d3.select("#selDatasetx");
	let dropdownListy = d3.select("#selDatasety");
	let columnLabel=columns[i];
	dropdownListx.append("option").text(columnLabel);
	dropdownListy.append("option").text(columnLabel);
};
// Store data in lists and create hover values in a list
d3.json('/data').then(function(data1){
	var target = [];
	var feat1 = [];
	var feat2 = [];
	var feat3 = [];
	var feat4 = [];
	var feat5 = [];
	var feat6 = [];
	var feat7 = [];
	var feat8 = [];
	var feat9 = [];
	var feat10 = [];
	var feat11 = [];
	var feat12 = [];
	var feat13 = [];
	var feat14 = [];
	var feat15 = [];
	var feat16 = [];
	var feat17 = [];
	var feat18 = [];
	var feat19 = [];
	var feat20 = [];
	var feat21 = [];
	var feat22 = [];
	var feat23 = [];
	var feat24 = [];
	var feat25 = [];
	var feat26 = [];
	var feat27 = [];
	var feat28 = [];
	var feat29 = [];
	var feat30 = [];
	var text = [];
	for (let i=0; i<data1.length; i++){
		let diagnosis = data1[i][1];
   		let f1 = data1[i][2];
   		let f2 = data1[i][3];
   		let f3 = data1[i][4];
   		let f4 = data1[i][5];
   		let f5 = data1[i][6];
   		let f6 = data1[i][7];
   		let f7 = data1[i][8];
   		let f8 = data1[i][9];
   		let f9 = data1[i][10];
   		let f10 = data1[i][11];
   		let f11 = data1[i][12];
   		let f12 = data1[i][13];
   		let f13 = data1[i][14];
   		let f14 = data1[i][15];
   		let f15 = data1[i][16];
   		let f16 = data1[i][17];
   		let f17 = data1[i][18];
   		let f18 = data1[i][19];
   		let f19 = data1[i][20];
   		let f20 = data1[i][21];
   		let f21 = data1[i][22];
   		let f22 = data1[i][23];
   		let f23 = data1[i][24];
   		let f24 = data1[i][25];
   		let f25 = data1[i][26];
   		let f26 = data1[i][27];
   		let f27 = data1[i][28];
   		let f28 = data1[i][29];
   		let f29 = data1[i][30];
   		let f30 = data1[i][31];
		let hover = `ID: ${data1[i][0]}, Diagnosis: ${data1[i][1]}`;
		target.push(diagnosis);	
		feat1.push(f1);
		feat2.push(f2);	
		feat3.push(f3);	
		feat4.push(f4);	
		feat5.push(f5);	
		feat6.push(f6);	
		feat7.push(f7);	
		feat8.push(f8);	
		feat9.push(f9);	
		feat10.push(f10);	
		feat11.push(f11);
		feat12.push(f12);
		feat13.push(f13);
		feat14.push(f14);
		feat15.push(f15);
		feat16.push(f16);
		feat17.push(f17);
		feat18.push(f18);
		feat19.push(f19);
		feat20.push(f20);
		feat21.push(f21);
		feat22.push(f22);
		feat23.push(f23);
		feat24.push(f24);
		feat25.push(f25);
		feat26.push(f26);
		feat27.push(f27);
		feat28.push(f28);
		feat29.push(f29);
		feat30.push(f30);	
		text.push(hover);
	
	};
	// Set initial conditions for Scatterplot
	var yInfo = [feat1, columns[2], [0, 30]]
	var xInfo = [feat2, columns[3], [0, 40]]
	var xData = xInfo[0];
    var xLabel = xInfo[1];
    var xRange = xInfo[2];
    var yData = yInfo[0];
    var yLabel = yInfo[1];
    var yRange = yInfo[2];

	var dataScatter = [{
		x: xData,
		y: yData,
		mode: 'markers',
		type: 'scatter',
		text: text
	  }];

	  var layout ={
		title: 'Cell Nuclei Data',
		xaxis: {
			title: xLabel,
			range: xRange
		},
		yaxis: {
			title: yLabel,
			range: yRange
		},
		mode: 'markers',
		type: 'scatter',
		marker: {
			color: 'blue',
			size: 10
		}
	};

	Plotly.newPlot('scatter', dataScatter, layout);
   
	// Call updateView() when a change takes place to the DOM
   d3.selectAll("#selDatasetx").on("change", updateView);
   d3.selectAll("#selDatasety").on("change", updateView); 
   // Create function that updates the views when new selection is made from the dropdown
   function updateView() {
    let columns = ['id', 'diagnosis', 'radius_mean', 'texture_mean', 'perimeter_mean',
		'area_mean', 'smoothness_mean', 'compactness_mean',
		'concavity_mean', 'concave points_mean', 'symmetry_mean',
		'fractal_dimension_mean', 'radius_se', 'texture_se',
		'perimeter_se', 'area_se', 'smoothness_se', 'compactness_se',
		'concavity_se', 'concave points_se', 'symmetry_se',
		'fractal_dimension_se', 'radius_worst', 'texture_worst',
		'perimeter_worst', 'area_worst', 'smoothness_worst',
		'compactness_worst', 'concavity_worst', 'concave points_worst',
		'symmetry_worst', 'fractal_dimension_worst'];
    let dropdownListx = d3.select("#selDatasetx");
	let dropdownListy = d3.select("#selDatasety");
     // Get current values on dropdowns
     let selectedx = dropdownListx.property("value");
     let selectedy = dropdownListy.property("value");
     // Get info for x-axis
	 function getDataX(selection) {
        return selection === columns[2]  ? [feat1, columns[2], [0, 30]]:
		selection === columns[3]  ? [feat2, columns[3], [0, 40]]:
		selection === columns[4]  ? [feat3, columns[4], [0, 200]]:
		selection === columns[5]  ? [feat4, columns[5], [0, 3000]]:
		selection === columns[6]  ? [feat5, columns[6], [0, .2]]:
		selection === columns[7]  ? [feat6, columns[7], [0, .4]]:
		selection === columns[8]  ? [feat7, columns[8], [0, .5]]:
		selection === columns[9]  ? [feat8, columns[9], [0, 0.25]]:
		selection === columns[10]  ? [feat9, columns[10], [0, 0.4]]:
		selection === columns[11]  ? [feat10, columns[11], [0, .4]]:
		selection === columns[12]  ? [feat11, columns[12], [0, 3]]:
		selection === columns[13]  ? [feat12, columns[13], [0, 5]]:
		selection === columns[14]  ? [feat13, columns[14], [0, 25]]:
		selection === columns[15]  ? [feat14, columns[15], [0, 600]]:
		selection === columns[16]  ? [feat15, columns[16], [0, .04]]:
		selection === columns[17]  ? [feat16, columns[17], [0, .15]]:
		selection === columns[18]  ? [feat17, columns[18], [0, .5]]:
		selection === columns[19]  ? [feat18, columns[19], [0, .06]]:
		selection === columns[20]  ? [feat19, columns[20], [0, .1]]:
		selection === columns[21]  ? [feat20, columns[21], [0, .03]]:
		selection === columns[22]  ? [feat21, columns[22], [0, 40]]:
		selection === columns[23]  ? [feat22, columns[23], [0, 50]]:
		selection === columns[24]  ? [feat23, columns[24], [0, 300]]:
		selection === columns[25]  ? [feat24, columns[25], [0, 5000]]:
		selection === columns[26]  ? [feat25, columns[26], [0, .25]]:
		selection === columns[27]  ? [feat26, columns[27], [0, 1.2]]:
		selection === columns[28]  ? [feat27, columns[28], [0, 1.5]]:
		selection === columns[29]  ? [feat28, columns[29], [0, .3]]:
		selection === columns[30]  ? [feat29, columns[30], [0, .8]]:
		[feat30, columns[31], [0, .25]];
    };
	// Get info for y-axis
    function getDataY(selection) {
		return selection === columns[2]  ? [feat1, columns[2], [0, 30]]:
		selection === columns[3]  ? [feat2, columns[3], [0, 40]]:
		selection === columns[4]  ? [feat3, columns[4], [0, 200]]:
		selection === columns[5]  ? [feat4, columns[5], [0, 3000]]:
		selection === columns[6]  ? [feat5, columns[6], [0, .2]]:
		selection === columns[7]  ? [feat6, columns[7], [0, .4]]:
		selection === columns[8]  ? [feat7, columns[8], [0, .5]]:
		selection === columns[9]  ? [feat8, columns[9], [0, 0.25]]:
		selection === columns[10]  ? [feat9, columns[10], [0, 0.4]]:
		selection === columns[11]  ? [feat10, columns[11], [0, .4]]:
		selection === columns[12]  ? [feat11, columns[12], [0, 3]]:
		selection === columns[13]  ? [feat12, columns[13], [0, 5]]:
		selection === columns[14]  ? [feat13, columns[14], [0, 25]]:
		selection === columns[15]  ? [feat14, columns[15], [0, 600]]:
		selection === columns[16]  ? [feat15, columns[16], [0, .04]]:
		selection === columns[17]  ? [feat16, columns[17], [0, .15]]:
		selection === columns[18]  ? [feat17, columns[18], [0, .5]]:
		selection === columns[19]  ? [feat18, columns[19], [0, .06]]:
		selection === columns[20]  ? [feat19, columns[20], [0, .1]]:
		selection === columns[21]  ? [feat20, columns[21], [0, .03]]:
		selection === columns[22]  ? [feat21, columns[22], [0, 40]]:
		selection === columns[23]  ? [feat22, columns[23], [0, 50]]:
		selection === columns[24]  ? [feat23, columns[24], [0, 300]]:
		selection === columns[25]  ? [feat24, columns[25], [0, 5000]]:
		selection === columns[26]  ? [feat25, columns[26], [0, .25]]:
		selection === columns[27]  ? [feat26, columns[27], [0, 1.2]]:
		selection === columns[28]  ? [feat27, columns[28], [0, 1.5]]:
		selection === columns[29]  ? [feat28, columns[29], [0, .3]]:
		selection === columns[30]  ? [feat29, columns[30], [0, .8]]:
		[feat30, columns[31], [0, .25]];
    };
	// update scatterplot and plot
    xData = getDataX(selectedx)[0];
    xLabel = getDataX(selectedx)[1];
    xRange = getDataX(selectedx)[2];
    yData = getDataY(selectedy)[0];
    yLabel = getDataY(selectedy)[1];
    yRange = getDataY(selectedy)[2];

    var dataScatter = [{
		x: xData,
		y: yData,
		mode: 'markers',
		type: 'scatter',
		text: text
	  }];

	var layout ={
		title: 'Cell Nuclei Data',
		xaxis: {
			title: xLabel,
			range: xRange
		},
		yaxis: {
			title: yLabel,
			range: yRange
		},
		mode: 'markers',
		type: 'scatter',
		marker: {
			color: 'blue',
			size: 10
		}
	};

	Plotly.newPlot('scatter', dataScatter, layout);
     };
})