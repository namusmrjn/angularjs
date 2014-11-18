app.controller('meetupsController', ['$scope', '$resource', '$upload', function ($scope, $resource, $upload) {
	$scope.meetups = [
		{ name: "MEAN SF Developers"},
		{ name: "Some other meetups"},
	]

	/*$scope.onFileSelect = function($files) {
      //console.log($files); // undefined
      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        console.log(file['name']);
        console.log($scope.fname);
        $scope.upload = $upload.upload({
          url: 'upload.php', //upload.php script, node.js route, or servlet url
          data: {
            //myObj: $scope.myModelObj
            fname: $scope.fname
          },
          file: file,
        }).progress(function(evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        }).success(function(data, status, headers, config) {
        	console.log('success');
        	console.log(status);
          // file is uploaded successfully
          console.log(data);
        });
      }
    };*/
		
		/*upload.php*/

	$scope.onFileSelect = function($files) {
    	$scope.message = "";
	    for (var i = 0; i < $files.length; i++) {
	        var file = $files[i];
	        console.log(file);
	        $scope.upload = $upload.upload({
	            url: 'upload.php',
	            method: 'POST',               
	            file: file
	        }).success(function(data, status, headers, config) {
	            $scope.message = data; 
	            console.log('success');
	            console.log(data);               
	        }).error(function(data, status) {
	            $scope.message = data;
	            console.log('error');
	            console.log(data);
	        });
	    }
	};

}]);