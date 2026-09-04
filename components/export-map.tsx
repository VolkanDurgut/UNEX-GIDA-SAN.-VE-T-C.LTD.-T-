'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import { EXPORT_COUNTRY_CODES, ORIGIN_COUNTRY_CODE } from '@/lib/export-countries';

/**
 * "50+ ülkeye ihracat" iddiasını somutlaştıran, hafif ve bağımlılığı düşük
 * bir dijital harita. Ağır bir 3D/WebGL sahne yerine (bkz. daha önce
 * denenip vazgeçtiğimiz kristal sahne) gerçek coğrafi veriyle (world-atlas
 * topojson, react-simple-maps) çalışan, SVG tabanlı ve hafif animasyonlu
 * bir görsel: ihracat yapılan ülkeler altın renkte dolduruluyor, üzerlerinde
 * yumuşak bir "radar" pulse efekti var; Türkiye ayrı (lacivert) vurgulanıyor.
 */
export function ExportMap() {
  return (
    <div className="export-map">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 480, center: [22, 12] }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography="/world-110m.json">
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const id = Number((geo as unknown as { id?: string | number }).id);
                const isOrigin = id === ORIGIN_COUNTRY_CODE;
                const isExport = EXPORT_COUNTRY_CODES.includes(id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isOrigin ? 'var(--navy)' : isExport ? 'var(--gold)' : '#e7e2d6'}
                    stroke="#fff"
                    strokeWidth={0.5}
                    style={{ outline: 'none' }}
                  />
                );
              })}
              {geographies
                .filter((geo) => EXPORT_COUNTRY_CODES.includes(Number((geo as unknown as { id?: string | number }).id)))
                .map((geo) => {
                  const centroid = geoCentroid(geo);
                  if (!Number.isFinite(centroid[0]) || !Number.isFinite(centroid[1])) return null;
                  return (
                    <Marker key={`marker-${geo.rsmKey}`} coordinates={centroid}>
                      <circle r={1.6} className="export-dot" />
                      <circle r={1.6} className="export-dot-ping" />
                    </Marker>
                  );
                })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
}
