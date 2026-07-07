import { jsPDF } from 'jspdf';
import { Tour } from './types';

export function generateItineraryPDF(tour: Tour) {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // ====== HEADER SECTION ======
  // Blue header background
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 55, 'F');

  // White accent line
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 55, pageWidth, 2, 'F');

  // Brand name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('STRANGERS TRIBE', margin, 22);

  // Tagline
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Come Solo. Leave with a Tribe.', margin, 30);

  // Trip title in header
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  const titleLines = doc.splitTextToSize(tour.title, contentWidth);
  doc.text(titleLines, margin, 42);

  y = 65;

  // ====== TRIP INFO BAR ======
  doc.setFillColor(245, 247, 250);
  doc.rect(margin, y, contentWidth, 22, 'F');
  doc.setDrawColor(220, 220, 220);
  doc.rect(margin, y, contentWidth, 22, 'S');

  const infoY = y + 9;
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');

  const infoItems = [
    `📍 ${tour.destination}`,
    `📅 ${tour.duration} Days, ${tour.duration - 1} Nights`,
    `💰 ₹${tour.price.toLocaleString('en-IN')}${tour.originalPrice ? ` (was ₹${tour.originalPrice.toLocaleString('en-IN')})` : ''}`,
    `⭐ ${tour.rating}/5 (${tour.reviews} reviews)`,
  ];

  const colWidth = contentWidth / infoItems.length;
  infoItems.forEach((item, idx) => {
    doc.text(item, margin + colWidth * idx + 4, infoY);
  });

  // Difficulty & Type row
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Difficulty: ${tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}  |  Trip Type: ${tour.tripType}  |  Max Group: ${tour.maxParticipants} travelers`, margin + 4, infoY + 8);

  y += 30;

  // ====== DESCRIPTION ======
  doc.setTextColor(30, 30, 30);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('About This Trip', margin, y);
  y += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  const descLines = doc.splitTextToSize(tour.description, contentWidth);
  doc.text(descLines, margin, y);
  y += descLines.length * 4.5 + 6;

  // ====== DAY-BY-DAY ITINERARY ======
  doc.setTextColor(37, 99, 235);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Day-by-Day Itinerary', margin, y);
  y += 3;

  // Blue underline
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(0.5);
  doc.line(margin, y, margin + 50, y);
  y += 8;

  tour.itinerary.forEach((day) => {
    // Check if we need a new page
    if (y > pageHeight - 50) {
      doc.addPage();
      y = margin;
    }

    // Day number badge
    doc.setFillColor(37, 99, 235);
    doc.roundedRect(margin, y - 4, 18, 7, 1.5, 1.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(`Day ${day.day}`, margin + 2.5, y);

    // Day title
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(day.title, margin + 22, y);
    y += 5;

    // Day description
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    const dayDescLines = doc.splitTextToSize(day.description, contentWidth - 5);
    doc.text(dayDescLines, margin + 3, y);
    y += dayDescLines.length * 4 + 3;

    // Activities
    day.activities.forEach((activity) => {
      if (y > pageHeight - 20) {
        doc.addPage();
        y = margin;
      }
      doc.setFillColor(37, 99, 235);
      doc.circle(margin + 5, y - 1, 1, 'F');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(8);
      doc.text(activity, margin + 9, y);
      y += 4.5;
    });

    y += 4;
  });

  // ====== HIGHLIGHTS ======
  if (y > pageHeight - 60) {
    doc.addPage();
    y = margin;
  }

  doc.setTextColor(37, 99, 235);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Trip Highlights', margin, y);
  y += 7;

  tour.highlights.forEach((highlight) => {
    if (y > pageHeight - 15) {
      doc.addPage();
      y = margin;
    }
    doc.setTextColor(34, 139, 34);
    doc.setFontSize(9);
    doc.text('✓', margin + 2, y);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(highlight, margin + 8, y);
    y += 5;
  });

  y += 5;

  // ====== INCLUSIONS ======
  if (y > pageHeight - 60) {
    doc.addPage();
    y = margin;
  }

  doc.setTextColor(37, 99, 235);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text("What's Included", margin, y);
  y += 7;

  tour.inclusions.forEach((inclusion) => {
    if (y > pageHeight - 15) {
      doc.addPage();
      y = margin;
    }
    doc.setTextColor(37, 99, 235);
    doc.setFontSize(9);
    doc.text('●', margin + 2, y);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(inclusion, margin + 8, y);
    y += 5;
  });

  // ====== FOOTER ======
  const footerY = pageHeight - 18;
  doc.setFillColor(37, 99, 235);
  doc.rect(0, footerY - 3, pageWidth, 25, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('Strangers Tribe | Come Solo. Leave with a Tribe.', margin, footerY + 4);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('📞 +91 8953680695  |  ✉ strangerstribe@gmail.com  |  📍 Jhansi, Uttar Pradesh', margin, footerY + 10);
  doc.text('🌐 www.strangerstribe.com  |  📷 @strangers_tribe', margin, footerY + 15);

  // Download
  const filename = `${tour.title.replace(/[^a-zA-Z0-9]/g, '_')}_Itinerary.pdf`;
  doc.save(filename);
}
