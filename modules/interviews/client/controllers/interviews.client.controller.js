'use strict';

// Interviews controller
angular.module('interviews').controller('InterviewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Interviews',
  function ($scope, $stateParams, $location, Authentication, Interviews) {
    $scope.authentication = Authentication;

    // Create new Interview
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'interviewForm');

        return false;
      }

      // Create new Interview object
      var interview = new Interviews({
        title: this.title,
        question: this.question,
        answer: this.answer
      });

      // Redirect after save
      interview.$save(function (response) {
        $location.path('interviews/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.question = '';
        $scope.answer = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    //Remove existing Interview
    $scope.remove = function (interview) {
      if (interview) {
        interview.$remove();

        for (var i in $scope.interviews) {
          if ($scope.interviews[i] === interview) {
            $scope.interviews.splice(i, 1);
          }
        }
      } else {
        $scope.interview.$remove(function () {
          $location.path('interviews');
        });
      }
    };

    // Update existing Interview
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'interviewForm');

        return false;
      }

      var interview = $scope.interview;

      interview.$update(function () {
        $location.path('interviews/' + interview._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Interviews
    $scope.find = function () {
      $scope.interviews = Interviews.query();
    };

    // Find existing Interview
    $scope.findOne = function () {
      $scope.interview = Interviews.get({
        interviewId: $stateParams.interviewId
      });
    };

  }]);
