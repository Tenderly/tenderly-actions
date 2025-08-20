const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

function main() {
  try {
    // Read the networks configuration
    const configPath = path.join(__dirname, '..', 'networks.json');
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configContent);

    // Prepare the data for the templates
    const templateData = {
      networks: config.networks,
      gatewayNetworks: config.networks.filter(n => n.supportsGateway)
    };

    // Generate networks.ts
    const networksTemplatePath = path.join(__dirname, '..', 'templates', 'networks.hbs');
    const networksTemplateContent = fs.readFileSync(networksTemplatePath, 'utf8');
    const networksTemplate = Handlebars.compile(networksTemplateContent);
    const networksContent = networksTemplate(templateData);

    // Generate gateway-networks.ts
    const gatewayTemplatePath = path.join(__dirname, '..', 'templates', 'gateway-networks.hbs');
    const gatewayTemplateContent = fs.readFileSync(gatewayTemplatePath, 'utf8');
    const gatewayTemplate = Handlebars.compile(gatewayTemplateContent);
    const gatewayContent = gatewayTemplate(templateData);

    // Write the generated files
    const networksOutputPath = path.join(__dirname, '..', 'src', 'networks.ts');
    const gatewayOutputPath = path.join(__dirname, '..', 'src', 'gateway-networks.ts');

    fs.writeFileSync(networksOutputPath, networksContent, 'utf8');
    fs.writeFileSync(gatewayOutputPath, gatewayContent, 'utf8');

    console.log(`✅ Successfully generated network files with ${config.networks.length} networks`);
    console.log(`   - Total networks: ${config.networks.length}`);
    console.log(`   - Gateway networks: ${templateData.gatewayNetworks.length}`);
    console.log(`   - Generated: networks.ts, gateway-networks.ts`);
    
  } catch (error) {
    console.error('❌ Error generating network files:', error);
    process.exit(1);
  }
}

main(); 