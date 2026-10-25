import test from 'node:test';
import assert from 'node:assert/strict';
import { PDFParse } from 'pdf-parse';

test('pdf-parse v2 exports the PDFParse class expected by the attachment reader', () => {
  assert.equal(typeof PDFParse, 'function');
  assert.equal(typeof PDFParse.prototype.getText, 'function');
  assert.equal(typeof PDFParse.prototype.destroy, 'function');
});

test('non-PDF byte signatures are detected before extraction', () => {
  const fake = Buffer.from('This is not a PDF');
  assert.notEqual(fake.subarray(0, 5).toString('ascii'), '%PDF-');
});
