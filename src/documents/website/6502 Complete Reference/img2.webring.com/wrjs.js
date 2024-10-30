<!--
function setPage(id, pg) {
    var elem = document.getElementById(id);
        elem.src = pg;
        elem.style.visibility = 'visible';
                elem = document.getElementById(id + '_div');
                elem.style.display = '';
}
function hidePage(dv) {
         dv = typeof(dv) != 'undefined' ? dv : 'wr_cloud_div';
        var elem = document.getElementById(dv);
                elem.style.display = 'none';
}
function toggleV(id) {
    var elem = document.getElementById(id);
    if (elem.style.display == 'none') {
        elem.style.display = '';
    } else {
        elem.style.display = 'none';
    }
}

function registerPopup(id) {
	var el = document.getElementById(id);
	var ael = document.getElementById(id + 'a');
	el.pop_show = function() {
		var el = ael;
		var x = el.offsetWidth;
		var y = 0;
		while (el) {
			x += el.offsetLeft;
			y += el.offsetTop;
			el = el.offsetParent;
		}
		this.style.top = y + 'px';
		this.style.left = x + 'px';
		this.style.display = 'block';
	};
	el.pop_hold = function() {
		if (!this.pop_t_id) return;
		clearTimeout(this.pop_t_id);
		this.pop_t_id = null;
	};
	el.pop_hide = function() {
		if (this.pop_t_id) clearTimeout(this.pop_t_id);
		this.pop_t_id = setTimeout(function() {
			el.style.display = 'none';
		}, 333);
	};
	el.onmousemove = function() {
		el.pop_hold();
	};
	el.onmouseout = function() {
		el.pop_hide();
	};
	ael.onmouseover = function() {
		el.pop_show();
	};
	ael.onmousemove = function() {
		el.pop_hold();
	};
	ael.onmouseout = function() {
		el.pop_hide();
	}
}

$("#SettingsMenuAction").live("click",function(){var a=$(".SettingsMenu"); a.is(":visible")?a.fadeOut("fast"):a.fadeIn("fast");return!1});
$("#BrowseMenuAction").live("click",function(){var a=$(".BrowseMenu"); a.is(":visible")?a.fadeOut("fast"):a.fadeIn("fast");return!1});
$("#SellMenuAction").live("click",function(){var a=$(".SellMenu"); a.is(":visible")?a.fadeOut("fast"):a.fadeIn("fast");return!1});

$(document).on('click', function(e) {
    if (!(e.target.id=='browselist' || $(e.target).parents('#browselist').length>0)) {
        var el = document.getElementById('browselist');
		if (el) {
        	el.style.display = 'none';
		}
    }
    if (!(e.target.id=='selllist' || $(e.target).parents('#selllist').length>0)) {
        var el = document.getElementById('selllist');
		if (el) {
        	el.style.display = 'none';
		}
    }
    if (!(e.target.id=='settings' || $(e.target).parents('#settings').length>0)) {
        var el = document.getElementById('settings');
		if (el) {
        	el.style.display = 'none';
		}
    }
});


var addthis_config = {
data_track_clickback: true
}

$(document).ready(function()
{
	//If user submits the form
	$("#submitlogin").click(function()
	{	
		$.ajax({
			type: "POST",
			url: "http://www.webring.com/cgi-bin/login?login&callback=?", 
			data: $("#logindata").serialize(), 
			crossDomain: true,
			beforeSend: function(x) {
  				if(x && x.overrideMimeType) {
   				x.overrideMimeType("application/j-son;charset=UTF-8");
  				}
 			},
			dataType: "jsonp",
			success: function(data){parseLogin(data);}
		});				
		return false;
	});
	
});

function parseLogin(data)
{
	if (data.wrid === '')
	{
		document.logindata.passwd.value = '';
		$("#errmsg").html(data.errmsg);
	}
	else
	{
		if (typeof document.logindata.goto === 'undefined')
		{
			if (data.rings === '')
			{
				window.location.reload();
			}
			else
			{
				window.location.assign("http://" + data.rings + ".webring.com/mbr");
			}
		}
		else
		{
			window.location.assign(document.logindata.goto.value);
		}
	}
}

function toggleV1(id) {
    var elem = document.getElementById(id);
		elem.style.marginTop = 0
}
function toggleV2(id) {
    var elem = document.getElementById(id);
		elem.style.marginTop = -280;
		wrlogin.style.display = 'none';
		wrjoin.style.display = 'none';
}

	// Place all Javascript code here
	$(document).ready(function(){
 		$("label.inlined + .input-text").each(function (type) {
	     	$(this).focus(function () {
	      		$(this).prev("label.inlined").addClass("focus");
	     	});
	     	$(this).keypress(function () {
	      		$(this).prev("label.inlined").addClass("has-text").removeClass("focus");
	     	});
	     	$(this).blur(function () {
	      		if($(this).val() == "") {
	      			$(this).prev("label.inlined").removeClass("has-text").removeClass("focus");
	      		}
	     	});
	    });
	});

-->

