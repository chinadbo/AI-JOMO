#!/usr/bin/env node
/**
 * Giscus Configuration Validator
 * Run this script to verify your Giscus setup
 *
 * Usage: node scripts/verify-giscus.js
 */

const https = require('https');

const REPO = 'chinadbo/AI-JOMO';
const REPO_ID = 'R_kgDOI7mXJg';
const CATEGORY = 'General';
const CATEGORY_ID = 'DIC_kwDOI7mXJs4Cjb';

console.log('🔍 Giscus Configuration Check\n');
console.log(`Repository: ${REPO}`);
console.log(`Category: ${CATEGORY}\n`);

// Check 1: Verify repository exists and is public
console.log('1️⃣  Checking repository...');
https.get(`https://api.github.com/repos/${REPO}`, (res) => {
  if (res.statusCode === 200) {
    console.log('   ✅ Repository found and is public');
  } else if (res.statusCode === 404) {
    console.log('   ❌ Repository not found or is private');
    console.log('   💡 Ensure the repository is public');
  } else {
    console.log(`   ⚠️  Unexpected response: ${res.statusCode}`);
  }

  // Check 2: Verify Discussions are enabled
  console.log('\n2️⃣  Checking if Discussions are enabled...');
  https.get(`https://api.github.com/repos/${REPO}/discussions/categories`, {
    headers: { 'Accept': 'application/vnd.github.v3+json' }
  }, (res2) => {
    if (res2.statusCode === 200) {
      console.log('   ✅ Discussions feature is enabled');

      let data = '';
      res2.on('data', chunk => data += chunk);
      res2.on('end', () => {
        try {
          const categories = JSON.parse(data);
          const generalCategory = categories.find(c => c.name === CATEGORY);

          if (generalCategory) {
            console.log(`   ✅ "${CATEGORY}" category exists`);
            console.log(`   📋 Category ID: ${generalCategory.id}`);
            console.log(`   📝 Your configured ID: ${CATEGORY_ID}`);

            if (generalCategory.id.toString() === CATEGORY_ID) {
              console.log('   ✅ Category ID matches');
            } else {
              console.log('   ❌ Category ID mismatch!');
              console.log(`   💡 Update data-category-id to: ${generalCategory.id}`);
            }
          } else {
            console.log(`   ❌ "${CATEGORY}" category not found`);
            console.log('   💡 Create this category in your repository Discussions');
            console.log('      https://github.com/' + REPO + '/discussions/categories');
          }
        } catch (e) {
          console.log('   ⚠️  Could not parse categories response');
        }

        console.log('\n📋 Next Steps:');
        console.log('   1. Install Giscus GitHub App:');
        console.log('      https://github.com/apps/giscus');
        console.log('   2. Ensure it has access to this repository');
        console.log('   3. Create the "General" category if it does not exist');
        console.log('\n🔗 Useful Links:');
        console.log(`   - Repository Settings: https://github.com/${REPO}/settings`);
        console.log(`   - Discussions: https://github.com/${REPO}/discussions`);
        console.log(`   - Giscus Config: https://giscus.app`);
      });
    } else if (res2.statusCode === 404) {
      console.log('   ❌ Discussions not enabled or no access');
      console.log('   💡 Enable Discussions in repository settings:');
      console.log(`      https://github.com/${REPO}/settings`);
    } else {
      console.log(`   ⚠️  Unexpected response: ${res2.statusCode}`);
    }
  }).on('error', (e) => {
    console.log(`   ⚠️  Error checking discussions: ${e.message}`);
  });
}).on('error', (e) => {
  console.log(`   ⚠️  Error checking repository: ${e.message}`);
});
