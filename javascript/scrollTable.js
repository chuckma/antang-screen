/**
 * Created by Administrator on 2016/11/18.
 */
function scrollTable1() {
    $(function () {
        var $this = $("#news");
        var scrollTimer;
        $this.hover(function () {
            clearInterval(scrollTimer);
        }, function () {
            scrollTimer = setInterval(function () {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = $('#news').find("div");
            var lineHeight = $self.find("table:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function () {
                $self.css({
                    marginTop: 0
                }).find("table:first").appendTo($self);
            })
        }
    })
};
function scrollTable2() {
    $(function () {
        var $this = $("#scroll1");
        var scrollTimer;
        $this.hover(function () {
            clearInterval(scrollTimer);
        }, function () {
            scrollTimer = setInterval(function () {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = $('#scroll1').find("div");
            var lineHeight = $self.find("table:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function () {
                $self.css({
                    marginTop: 0
                }).find("table:first").appendTo($self);
            })
        }
    })
};
function scrollTable3() {
    $(function () {
        var $this = $("#scroll2");
        var scrollTimer;
        $this.hover(function () {
            clearInterval(scrollTimer);
        }, function () {
            scrollTimer = setInterval(function () {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = $('#scroll2').find("div");
            var lineHeight = $self.find("table:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function () {
                $self.css({
                    marginTop: 0
                }).find("table:first").appendTo($self);
            })
        }
    })
};
function scrollTable4() {
    $(function () {
        var $this = $("#scroll3");
        var scrollTimer;
        $this.hover(function () {
            clearInterval(scrollTimer);
        }, function () {
            scrollTimer = setInterval(function () {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = $('#scroll3').find("div");
            var lineHeight = $self.find("table:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function () {
                $self.css({
                    marginTop: 0
                }).find("table:first").appendTo($self);
            })
        }
    })
};
function scrollTable5() {
    $(function () {
        var $this = $("#scroll4");
        var scrollTimer;
        $this.hover(function () {
            clearInterval(scrollTimer);
        }, function () {
            scrollTimer = setInterval(function () {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = $('#scroll4').find("div");
            var lineHeight = $self.find("table:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function () {
                $self.css({
                    marginTop: 0
                }).find("table:first").appendTo($self);
            })
        }
    })
};
function scrollTable6() {
    $(function () {
        var $this = $("#scroll5");
        var scrollTimer;
        $this.hover(function () {
            clearInterval(scrollTimer);
        }, function () {
            scrollTimer = setInterval(function () {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = $('#scroll5').find("div");
            var lineHeight = $self.find("table:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function () {
                $self.css({
                    marginTop: 0
                }).find("table:first").appendTo($self);
            })
        }
    })
};

