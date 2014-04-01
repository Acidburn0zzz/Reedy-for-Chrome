

exports = (function() {
	
	function test(raw, expected) {
		var tokens = window.fastReader.parse2(raw),
			res = [], i;
		
		for (i = 0; i < tokens.length; i++) {
			res.push(tokens[i].toString())
		}
		
		assert.equalArray(res, expected);
	}
	
	
	var assert = require('../assert.js');
	
	require('../../js/content/Parser.js');
	
	
	assert.profile('parser2');
	
	test('произошло что-то необычное. Лента.ру,',           ['произошло','что-то','необычное','.','Лента.ру',',']);
	test('произошло "что-то" необычное))) Однажды,',        ['произошло','"','что-то','"','необычное',')))','Однажды',',']);
	test('перевод A. Préchac’а). Сочетание',                ['перевод','A','.','Préchac’а',')','.','Сочетание']);
	test('перевод Й.К.Л. Прильвиц. Сочетание',              ['перевод','Й.К.Л','.','Прильвиц','.','Сочетание']);
	test('ну У.Б.Йитс понятно теперь',                      ['ну','У.Б.Йитс','понятно','теперь']);
	test('перевод S.T.A.L.K.E.R Сочетание',                 ['перевод','S.T.A.L.K.E.R','Сочетание']);
	test('был запущен в 30-е годы',                         ['был','запущен','в','30-е','годы']);
	test('значит те 30-50 тысяч',                           ['значит','те','30-50','тысяч']);
	test('значит аи92. Что',                                ['значит','аи92','.','Что']);
	test('Сказал-толкнул-упал-поднялся-разошлись.',         ['Сказал-толкнул-упал-поднялся-разошлись','.']);
	
	test('так считают 36%, по-моему уже',                  ['так','считают','36%',',','по-моему','уже']);
	test('значит те -30°C что',                             ['значит','те','-30°C','что']);
	test('значит те -30*2 что',                             ['значит','те','-30*2','что']);
	test('значит это: -30*2. Что',                          ['значит','это',':','-30*2','.','Что']);
	
	test('думает другое. +7 985 970-45-45. И собственно',  ['думает','другое','.','+7 985 970-45-45','.','И','собственно']);
	test('думает другое +7 985 970-45-45 И собственно',    ['думает','другое','+7 985 970-45-45','И','собственно']);
	test('думает другое:+7 (985) 970-45-45 И собственно',  ['думает','другое',':','+7 (985) 970-45-45','И','собственно']);
	test('думает другое:7 985 970-45-45. И собственно',    ['думает','другое',':','7 985 970-45-45','.','И','собственно']);
	test('думает другое. 7 (985) 970-45-45. И собственно', ['думает','другое','.','7 (985) 970-45-45','.','И','собственно']);
	test('думает другое: 123-45-67. И собственно',         ['думает','другое',':','123-45-67','.','И','собственно']);
	test('думает другое:123-45-67. И собственно',          ['думает','другое',':','123-45-67','.','И','собственно']);
	
	test('http://www.yandex.ru/',                           ['http://www.yandex.ru/']);
	test('olegcherr@yandex.ru',                             ['olegcherr@yandex.ru']);
	
	return assert.profileEnd();
	
})();