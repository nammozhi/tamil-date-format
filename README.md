# Tamil Date Format

> A simple javascript snippets for display date &amp; time in Tamil language. Enjoy!

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
	let date = new Date();
	document.write(date.tamilFormat());
</script>
```

**Output**

```
=> அக்டோபர் மாதம் 2021ம் வருடம் சனிக்கிழமை 9ம் திகதி மாலை 6 மணி 48 நிமிடம்
```

## Formatting using patterns

```
- date.tamilFormat() => அக்டோபர் மாதம் 2021ம் வருடம் சனிக்கிழமை 9ம் திகதி மாலை 6 மணி 48 நிமிடம்
- date.tamilFormat('MMMM') => அக்டோபர்
- date.tamilFormat('Dம் திகதி') => 9ம் திகதி
- date.tamilFormat('P h மணி m நிமிடம்') => மாலை 6 மணி 48 நிமிடம்
```
