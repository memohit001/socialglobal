document.getElementById('more-info-button').addEventListener('click', function() {
    const additionalInfo = `
        The objective of Social Global Network PVT LTD is to provide comprehensive,
data-driven digital marketing solutions that empower businesses to achieve
sustainable growth. We strive to enhance our clients' brand visibility and reach
by leveraging the latest technologies and innovative strategies tailored to their
unique needs. Our goal is to drive increased customer engagement and
conversion rates, ensuring a strong return on investment. We are committed to
building long-term partnerships with our clients, offering transparent, resultsoriented services that adapt to changing market trends. By focusing on
measurable outcomes, we aim to help businesses navigate the evolving digital
landscape, continuously improving their online presence and competitiveness.
Ultimately, our objective is to be a trusted partner in our clients' journey towards
digital success and global expansion.
    `;
    
    const additionalInfoElement = document.getElementById('additional-info');
    additionalInfoElement.style.display = 'block';
    additionalInfoElement.textContent = additionalInfo;
});
d