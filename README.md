# Tidslinjeprojekt

Detta är ett React + Spring Boot-projekt som visar historiska händelser i en interaktiv tidslinje. 
Datan i json filerna för projektet är från mina föreläsningsanteckningar under min kurs på guidelinjen i Vadstena.

## Funktioner

* Interaktiv tidslinje med kort som kan expandera för att visa detaljer.
* Visar olika historiska teman
* Responsiv design och horisontell scroll för tidslinjen.

## Komma igång

### 1. Klona projektet

```
git clone https://github.com/ditt-användarnamn/tidslinjeprojekt.git
cd tidslinjeprojekt
```

### 2. Starta backend (Spring Boot)

1. Gå till backend-mappen:

```
cd backend
```

2. Bygg och kör backend:

```
./mvnw clean install
./mvnw spring-boot:run
```

> Backend körs som standard på `http://localhost:8080`.

### 3. Starta frontend (React)

1. Gå till frontend-mappen:

```
cd ../frontend
```

2. Installera beroenden:

```
npm install
```

3. Starta utvecklingsservern:

```
npm start
```

Frontend körs som standard på http://localhost:5173 och anropar backend på http://localhost:8080.


## Bygga för produktion

För att bygga frontend för produktion:

```
npm run build
```

> Detta skapar en `build/`-mapp med statiska filer som kan serveas från backend eller annan webserver.

## Struktur

```
backend/       # Spring Boot-backend
frontend/      # React-frontend
data/          # JSON-filer för tidslinje
```


