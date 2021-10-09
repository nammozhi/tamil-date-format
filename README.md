# Tamil Date Format

###### A simple javascript snippets for display date & time in Tamil language. Enjoy! :heart:

<img src="https://img.shields.io/badge/Contributions-Welcome-blueviolet"> <img src="https://img.shields.io/badge/Version-1.0-blue"> <img src="https://img.shields.io/badge/JS size-2.35 Kb-brightgreen">

## Date and time patterns

```
- YYYY = Long Year (2021)
- YY = Short year (21)
- MMMM = Long month (ஜனவரி, பிப்ரவரி ... டிசம்பர்)
- MMM = Month abbreviation (ஜன, பிப் ... டிச)
- MM = Month (01-12)
- M = Month (1-12)
- DDDD = Day of the week (திங்கட்கிழமை, செவ்வாய்கிழமை ... ஞாயிற்றுக்கிழமை)
- DDD = Day of the week (திங்கள், செவ்வாய் ... ஞாயிறு)
- DD = Day (01-31)
- D = Day (1-31)
- P = Parts of the day (அதிகாலை, காலை ... நள்ளிரவு)
- HH = 24h format (00-23)
- H = 24h format (0-23)
- hh = 12h format (00-12)
- h = 12h format (0-12)
- mm = minute (00-59)
- m = minute (0-59)
- ss = second (00-59)
- s = second (0-59)
- sss = milliseconds(0-999)
```

## Usage

```
<script src="tamilDateFormat.js"></script>
<script>
	let d = new Date();
	document.write(d.tamilFormat());
</script>
```

**Output**

```
=> அக்டோபர் மாதம் 2021ம் வருடம் சனிக்கிழமை 9ம் திகதி மாலை 6 மணி 48 நிமிடம்
```

## Formatting using patterns

```
- d.tamilFormat() => அக்டோபர் மாதம் 2021ம் வருடம் சனிக்கிழமை 9ம் திகதி மாலை 6 மணி 48 நிமிடம்
- d.tamilFormat('MMMM') => அக்டோபர்
- d.tamilFormat('Dம் திகதி') => 9ம் திகதி
- d.tamilFormat('P h மணி m நிமிடம்') => மாலை 6 மணி 48 நிமிடம்
```

## Do you want to improve tamil-date-format ?

You're welcome to make your contributions and send them as a pull request. :green_heart: