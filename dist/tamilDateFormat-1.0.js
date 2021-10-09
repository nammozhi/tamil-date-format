(function () {
    let pad2 = function (_num) {
        return (_num > 9) ? _num : '0' + _num;
    }

    let tamil = {
        default: 'MMMM மாதம் YYYYம் வருடம் DDDD Dம் திகதி P h மணி m நிமிடம்',
        week: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        month: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthShort: 'ஜன_பிப்_மார்_ஏப்_மே_ஜூன்_ஜூலை_ஆக_செப்_அக்_நவ_டிச'.split('_'),
        dayPart: 'அதிகாலை_காலை_முற்பகல்_நண்பகல்_பிற்பகல்_மாலை_இரவு_நள்ளிரவு'.split('_')
    }

    function getDayPart(_date) {
        let time = _date.getHours();
        if (time >= 2 && time <= 5) {
            return tamil.dayPart[0];
        } else if (time >= 6 && time <= 9) {
            return tamil.dayPart[1];
        } else if (time >= 10 && time <= 11) {
            return tamil.dayPart[2];
        } else if (time >= 12 && time <= 13) {
            return tamil.dayPart[3];
        } else if (time >= 14 && time <= 16) {
            return tamil.dayPart[4];
        } else if (time >= 17 && time <= 20) {
            return tamil.dayPart[5];
        } else if (time >= 21 && time <= 23) {
            return tamil.dayPart[6];
        } else if (time >= 0 && time <= 1) {
            return tamil.dayPart[7];
        }
    }

    let replacer = {
        YYYY: function (_date) {
            return _date.getFullYear()
        },
        YY: function (_date) {
            return _date.getFullYear().toString().substr(-2)
        },
        MMMM: function (_date) {
            return tamil.month[_date.getMonth()]
        },
        MMM: function (_date) {
            return tamil.monthShort[_date.getMonth()]
        },
        MM: function (_date) {
            return pad2(_date.getMonth() + 1)
        },
        M: function (_date) {
            return _date.getMonth() + 1
        },
        DDDD: function (_date) {
            return tamil.week[_date.getDay()]
        },
        DDD: function (_date) {
            return tamil.weekShort[_date.getDay()]
        },
        DD: function (_date) {
            return pad2(_date.getDate())
        },
        D: function (_date) {
            return _date.getDate()
        },
        HH: function (_date) {
            return pad2(_date.getHours())
        },
        H: function (_date) {
            return _date.getHours()
        },
        hh: function (_date) {
            return pad2(_date.getHours() % 12 || 12)
        },
        h: function (_date) {
            return _date.getHours() % 12 || 12
        },
        mm: function (_date) {
            return pad2(_date.getMinutes())
        },
        m: function (_date) {
            return _date.getMinutes()
        },
        sss: function (_date) {
            return _date.getMilliseconds()
        },
        ss: function (_date) {
            return pad2(_date.getSeconds())
        },
        s: function (_date) {
            return _date.getSeconds()
        },
        P: function (_date) {
            return getDayPart(_date)
        },
    }

    Date.prototype.tamilFormat = function (_format) {
        let format = (_format != undefined) ? _format : tamil.default;

        for (let key in replacer) {
            format = format.replace(`${key}`, `${replacer[key](this)}`);
        }

        return format;
    }
}());