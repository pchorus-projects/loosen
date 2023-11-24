# Homepage des Schaustellerbetriebs Loosen

Dieses Repository enthält alle Sourcen der Homepage des Schaustellerbetriebs Loosen.

## Entwicklung

1. `npm install`: Installieren aller Abhängigkeiten
2. `npm run dev`: Lokaler Entwicklungsserver mit Hot Reload
3. `npm run generate`: Erstellen eines Production Build

## Videos

Videos are generated via Cloudinary and provided as static assets.
All videos are provided only in MP4 format, since Safari did not provide WebM formats properly.

To generate those, use Cloudinary's REST API, e.g. with Insomnia or Postman. I use a quality of 60% to keep file sizes between 14MB and 17MB.

You can learn more in [Cloudinary's transformations documentation](https://cloudinary.com/documentation/transformation_reference).

URLs to generate videos:

```
https://res.cloudinary.com/drgvhs8ei/video/upload/q_60/vc_h264/oecherbend22_bnt1jd.mp4?_s=vp-1.9.4

https://res.cloudinary.com/drgvhs8ei/video/upload/q_40/vc_h264/as_krefeld_ttbvmt.mp4?_s=vp-1.9.4

https://res.cloudinary.com/drgvhs8ei/video/upload/q_60/vc_h264/weihnachtsmarkt_xn0wz1.mp4?_s=vp-1.9.4
```
