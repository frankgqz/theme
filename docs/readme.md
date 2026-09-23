Wiring it in components consumer side
Once you've extended theme.ts and ThemeProvider.tsx and pushed, every consumer can do this

Via CSS variables (anywhere in any app)

h1, h2, h3 {
  font-family var(--theme-font-family-heading);
  font-weight var(--theme-font-weight-heading);
  letter-spacing var(--theme-heading-tracking);
}
body {
  font-family var(--theme-font-family);
  font-weight var(--theme-font-weight-body);
}
.card {
  border-radius var(--theme-radius-card);
  box-shadow var(--theme-shadow-card);
}
button {
  border-radius var(--theme-radius-button);
}



Via JS theme object (tsx): 

const { themeColors } = useTheme()

<h1 style={{
  fontFamily: themeColors.fontFamilyHeading,
  fontWeight: themeColors.fontWeightHeading,
  letterSpacing: themeColors.headingTracking
}}>
  Pickleball
</h1>

<div style={{
  borderRadius: themeColors.radiusCard,
  boxShadow: themeColors.shadowCard
}}>
  Card content
</div>