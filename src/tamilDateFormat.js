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
        if (time >= 2 && time <= 5) { // அதிகாலை
            return tamil.dayPart[0];
        } else if (time >= 6 && time <= 9) { // காலை
            return tamil.dayPart[1];
        } else if (time >= 10 && time <= 11) { // முற்பகல்
            return tamil.dayPart[2];
        } else if (time >= 12 && time <= 13) { // நண்பகல்
            return tamil.dayPart[3];
        } else if (time >= 14 && time <= 16) { // பிற்பகல்
            return tamil.dayPart[4];
        } else if (time >= 17 && time <= 20) { // மாலை
            return tamil.dayPart[5];
        } else if (time >= 21 && time <= 23) { // இரவு
            return tamil.dayPart[6];
        } else if (time >= 0 && time <= 1) { // நள்ளிரவு
            return tamil.dayPart[7];
        }
    }

    let replacer = {
        YYYY: function (_date) {
            return _date.getFullYear() // 2021
        },
        YY: function (_date) {
            return _date.getFullYear().toString().substr(-2) // 21
        },
        MMMM: function (_date) {
            return tamil.month[_date.getMonth()] // ஜனவரி, பிப்ரவரி ... டிசம்பர்
        },
        MMM: function (_date) {
            return tamil.monthShort[_date.getMonth()] // ஜன, பிப் ... டிச
        },
        MM: function (_date) {
            return pad2(_date.getMonth() + 1) // 01-12
        },
        M: function (_date) {
            return _date.getMonth() + 1 // 1-12
        },
        DDDD: function (_date) {
            return tamil.week[_date.getDay()] // திங்கட்கிழமை, செவ்வாய்கிழமை ... ஞாயிற்றுக்கிழமை
        },
        DDD: function (_date) {
            return tamil.weekShort[_date.getDay()] // திங்கள், செவ்வாய் ... ஞாயிறு
        },
        DD: function (_date) {
            return pad2(_date.getDate()) // 01-31
        },
        D: function (_date) {
            return _date.getDate() // 1-31
        },
        HH: function (_date) {
            return pad2(_date.getHours()) // 00-23
        },
        H: function (_date) {
            return _date.getHours() // 0-23
        },
        hh: function (_date) {
            return pad2(_date.getHours() % 12 || 12) // 00-12
        },
        h: function (_date) {
            return _date.getHours() % 12 || 12 // 0-12
        },
        mm: function (_date) {
            return pad2(_date.getMinutes()) // 00-59
        },
        m: function (_date) {
            return _date.getMinutes() // 0-59
        },
        sss: function (_date) {
            return _date.getMilliseconds() // 0-999
        },
        ss: function (_date) {
            return pad2(_date.getSeconds()) // 00-59
        },
        s: function (_date) {
            return _date.getSeconds() // 0-59
        },
        P: function (_date) {
            return getDayPart(_date) // அதிகாலை, காலை ... நள்ளிரவு
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