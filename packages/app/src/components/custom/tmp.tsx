 <div style={containerStyle}>
    <InfoCard title="Trends over time" noPadding>
      <Table
        options={{
          search: false,
          paging: false,
          toolbar: false,
        }}
        data={data}
        columns={columns}
      />
    </InfoCard>
  </div>
);

export const TrendingMix = () => (
  <div style={containerStyle}>
    <TrendLine data={[0.1, 0.7, 0.5, 0.8]} title="Trend over time" />
  </div>
);

export const TrendingUp = () => (
  <div style={containerStyle}>
    <TrendLine data={[0.1, 0.5, 0.9, 1.0]} title="Trend over time" />
  </div>
);

export const TrendingDown = () => (
  <div style={containerStyle}>
    <TrendLine data={[0.8, 0.7, 0.5, 0.1]} title="Trend over time" />
  </div>
);

export const TrendingCustomColor = () => (
  <div style={containerStyle}>
    <TrendLine
      data={[0.8, 0.7, 0.5, 0.1]}
      color="purple"
      title="Trend over time"
    />
  </div>
);
