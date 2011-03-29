
// ==UserScript==
// @name           bliptv-links
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @namespace      http://day9tv.blip.tv/file/*
// @description    download links for bliptv
// @include        http://day9tv.blip.tv/file/*
// ==/UserScript==
bar = $("#EP_and_Format_Bar")

$("#SelectFormat option[value]").each(function (){
	opt = $(this)
	file = opt.val().match(/=(.+)$/)[1]
	url = "http://blip.tv/file/get/" + file
	$('<p><a href="' + url + '">' + opt.text() + '</a></p> ').prependTo(bar)
})
$("<span> Download </span>").prependTo(bar)