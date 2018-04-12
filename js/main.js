// jquery
$(document).ready(function() {
	var max = 0;
	$('.services__progress__value[data-val]').each(function() {
		var value = parseInt($(this).data('val'));
		max = (value > max) ? value : max;
	});
	$(".services__item").each(function() {
		var value = $(this).children(".services__progress__value[data-val]").attr("data-val");
		$(this).children(".services__progress").css("width", 100/max*value+"%");
	});
});

// angular
angular.module('app', []).controller('ReviewsCtrl', function($scope) {
	$scope.reviews = [
		{ text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!', done: false },
		{ text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?', done: false },
		{ text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?' }
	];
	$scope.addReview = function() {
		if ($scope.reviewMsg) {
			$scope.reviews.push({ text: $scope.reviewMsg });
			$scope.reviewMsg = '';
		}
	};
	angular.element(window.document).bind("keydown keypress", function(event) {
		if (event.which === 13 && event.ctrlKey) {
			event.preventDefault();
			$scope.$apply(function() {
				$scope.addReview();
			});
			
		}
	});
});