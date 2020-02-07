
import React from 'react';
import { styled } from '@material-ui/core/styles';


const yearStyle = {
  display: 'inline-block',
  margin: '32px 0 0 0',
}

const anchorStyle = {
  margin: '8px, 0, 16px, 0', 
  padding: '8px, 0, 16px',
  display: 'block', 
  textAlign: 'start',
  color: '#FAFAFA',
}

const multimediaSecurityInt = (
  <div id='center' style={{textAlign: 'left'}}>
    <div style={anchorStyle}>
      <a href="#sj2019">2019</a>, <a href="#sj2018">2018</a> <a href="#sj2017">2017</a> <a href="#sj2015">2015</a>  <a href="#sj2014">2014</a>  <a href="#sj2013">2013</a>   <a href="#sj2012">2012</a>  <a href="#sj2011">2011</a>  <a href="#sj2010">2010</a>  <a href="#sj2009">2009</a>  <a href="#sj2008">2008</a>  <a href="#sj2007">2007</a>  <a href="#sj2006">2006</a>  <a href="#sj2005">2005</a>  <a href="#sj2004">2004</a> <a href="#sj2003">2003</a>  <a href="#sj2000">2000</a>  <a href="#sj1999">1999</a>
    </div>
    <a style={yearStyle} name="sj2019">2019</a>
    <p>Wook-Hyung Kim, Seung-Hun Nam, Jihyeon Kang, and Heung-Kyu Lee, <em>Robust Watermarking in Curvelet Domain for Preserving Cleanness of High-Quality Images</em>, (To appear in) Multimedia Tools and Applications, Springer.</p>
    <p>Do-Guk Kim, Jong-Uk Hou, and Heung-Kyu Lee, <em>Learning Deep Features for Source Color Laser Printer Identification based on Cascaded Learning</em>, (To appear in) Neurocomputing, Elsevier.</p>
    <p>Seung-Min Mun, Seung-Hun Nam, Haneol Jang, Dongkyu Kim, and Heung-Kyu Lee, <em>Finding Robust Domain from Attacks : A Learning Framework for Blind Watermarking</em>, (To appear in) Neurocomputing, Elsevier.</p>
    <p>Sang-Keun Ji and Heung-Kyu Lee, <em>Image Recapture Prevention Using Secure Display Scheme on Polarized 3D System</em>, (To appear in) IEEE Trans. On Circuits and Systems for Video Technology.</p>

    <a style={yearStyle} name="sj2018">2018</a>
    <p>Jong-Uk Hou, Dongkyu Kim, Wonhyuk Ahn, and Heung-Kyu Lee, <em>Copyright Protections of Digital Content in the Age of 3D Printer : Emerging Issues and Survey</em>, IEEE Access, Vol. 6, No. 1(December 2018), pp. 44082-44093.</p>
    <p>Jin-Seok Park, Hyeon-Gi Kim, Do-Guk Kim, In-Jae Yu, and Heung-Kyu Lee, <em>Paired Mini-Batch Training : A New Deep Network Training for Forensics and Steganalysis</em> Signal Processing : Image Communication, Vol. 67, September 2018, pp. 132-139 </p>
    <p>Jong-Uk Hou, In-Jae Yu, and Heung-Kyu Lee, <em>Collusion Attack Resilient 3D Mesh Watermarking Based on Anti-Collusion Fingerprint Code</em> MDPI, Applied Sciences, Vol. 8, No. 7 (July 2018)</p>
    <p>Wook-Hyung Kim, Jong-Uk Hou, Han-Ul Jang, and Heung-Kyu Lee, <em>Robust Template-based Watermarking for DIBR 3D Images</em> MDPI, Applied Science, Vol. 8, No. 6 (June 2018)</p>
    <p>Hyeon-Gi Kim, Jin-Seok Park, Do-Guk Kim, and Heung-Kyu Lee, <em>Two-stream neural networks to detect manipulation of JPEG compressed images </em>Electronics Letters 54.6 (2018): 354-355.</p>
    <p>Dongkyu Kim, Han-Ul Jang, Seung-Min Mun, Sunghee Choi, and Heung-Kyu Lee, <em>Median Filtered Image Restoration and Anti-forensics Using Adversarial Networks</em> IEEE Signal Processing Letters, Vol. 25, No. 2(February 2018), pp. 278-282.</p>

    <a style={yearStyle} name="sj2017">2017</a>
    <p>Seung-Hun Nam, Wook-Hyung Kim, Seung-Min Mun , Jong-Uk Hou, Sunghee Choi, and Heung-Kyu Lee, <em>A SIFT Features based on Blind Watermarking for DIBR 3D Images</em>, Multimedia Tools and Applications, Online Publication at 3 April, 2017, DOI : 1 0.1007/s11042-017-4678-x</p>
    <p>Han-Ul Jang,  Hak-Yeol Choi, Jeong-Ho Son, Dongkyu Kim, Jong-Uk Hou, Sunghee Choi, and Heung-Kyu Lee, <em>Cropping Resilient 3D Mesh Watermarking based on Consistent Segmentation and Mesh Steganalysis</em>, Multimedia Tools and Applications, Online Publication at 15 March 2017, DOI : 10.1007/s11042-017-4483-6</p>
    <p>Dae-Jin Jung and Heung-Kyu Lee, <em>Frame-rate Conversion Detection based on Periodicity of Motion Artifact</em> Multimedia Tools and Applications, Online Publication at 10 March 2017, DOI : 10.1007/s11042-017-4519-y</p>

    <p>Hak-Yeol Choi, Han-Ul Jang, Jeong-Ho Son, and Heung-Kyu Lee, <em>Blind 3D Mesh Watermarking based on Cropping-Resilient Synchronization</em> Multimedia Tools and Applications, Vol. 76, No. 24(December 2017), pp. 26695-26721.</p>
    <p>Hak-Yeol Choi, Dai-Kyung Hyun, Sunghee Choi, and H. K. Lee, <em>Enhanced Resampling Detection based on Image Correlation of 3D Stereoscopic Images</em> EURASIP J. on Image and Video Processing, DOI : 10.1186/s13640-017-0170-9,  December 2017, 2017 : 22, pp. 1-19.</p>
    <p>Han-Ul Jang, Dongkyu Kim, Seung-Min Mun, Sunghee Choi, and Heung-Kyu Lee, <em>DeepPore : Fingerprint Pore Extraction Using Deep Convolutional Neural Networks</em> IEEE Signal Processing Letters, Vol. 24, No. 12(December 2017), pp. 18108-1812</p>
    <p>Jong-Uk Hou, Do-Gon Kim, and Heung-Kyu Lee, <em>Blind 3D Mesh Watermarking for 3D Printed Model by Analyzing Layering Artifact</em> IEEE Trans. On Information Forensics &amp; Security, Vo. 12, No. 11(November 2017), pp. 2712-2725.</p>
    <p>Wook-Hyung Kim, Seung-Hun Nam, and Heung-Kyu Lee, <em>Blind Curvelet Watermarking Method for High-Quality Images</em> IET, Electronics Letters, Vol. 53, No. 19, 14 September 2017, pp. 1302-1304.</p>
    <p>Jong-Uk Hou and Heung-Kyu Lee, <em>Detection of Hue Modification Using Photo Response Non-Uniformity</em> IEEE Trans. On Circuits and Systems for Video Technology, Vol. 27, No. 8(August 2017), pp. 1826-1832,  10.1109/TCSVT.2016.2539828</p>
    <p>Jin-Seok Park, Dai-Kyung Hyun, Jong-Uk Hou, Do-Guk Kim, and Heung-Kyu Lee, <em>etecting Digital Image Forgery in Near-Infrared Image of CCTV</em> Multimedia Tools and Applications, Vol. 76, No. 14(July 2017), DOI:10.1007/s11042-016-3871-7, pp. 15817-15838.</p>


    <a style={yearStyle} name="sj2015">2015</a>
    <p>D.-G. Kim and H. K. Lee <em>Color Laser Printer Identification Using Halftone Texture Fingerprint</em> Electronics Letters, Vol. 51, No. 13(25 June 2015), pp. 981-983.</p>
    <p>D.-J. Jung, D.-K. Hyun, and H. K. Lee <em>Recaptured Video Detection based on Sensor Pattern Noise</em> Springer Open Journal, EURASIP Journal on Image and Video Processing, 3 December 2015, 2015 : 40, DOI 10.1186/s13640-015-0096-z, 1 : 14.</p>

    <a style={yearStyle} name="sj2014">2014</a>
    <p>S. J. Ryu, H. Y. Lee, and H. K. Lee <em>Estimation of Linear Transformation by Analyzing the Periodicity of Interpolation</em> Pattern Recognition Letters, Vol. 36, 2014, pp. 89-99.</p>
    <p>S. J. Ryu and H. K. Lee <em>Detecting Trace of Seam Carving for Forensic Analysis</em> IEICE Trans. On Information and Systems, Vol. E97-D, No. 5(May 2014), pp. 1304-1311.</p>


    <a style={yearStyle} name="sj2013">2013</a>
    <p>S. J. Ryu and H. K. Lee <em>Detecting Trace of Seam Carving for Forensic Analysis</em> IEICE Trans. On Information and Systems, Vol. E97-D, No. 5(May 2014), pp. 1304-1311.</p>
    <p>C. H. Choi, H. Y. Lee and H. K. Lee <em>Estimation of Color Modification in Digital Images by CFA Pattern Change</em>Elsevier, Forensic Science International ï¿½ An International Journal, Vol. 226(1-3), 10 March 2013, pp. 94-105.</p>
    <p>S. J. Ryu and H. K. Lee <em>Localizing Trace of Seam Carving for Forensic Analysis</em>J. of Applied Research and Technology, invited paper, 2013.</p>
    <p>D. K. Hyun, D. J. Jung, H. Y. Lee, and H. K. Lee <em>Rotation-Tolerant Camera Identification using Optimal Tradeoff Circular Harmonic Function Coorelation Filter</em>IEICE Trans. On Information and Systems, Vol. E96-D, No. 6(June 2013), pp. 1394-1397.</p>


    <a style={yearStyle} name="sj2012">2012</a>
    <p>S. J. Ryu and H. K. Lee <em>Localizing Trace of Seam Carving for Forensic Analysis </em> J. of Applied Research and Technology, invited paper, will appear in 2012.</p>
    <p>H. D. Kim, J. W. Lee, T. W. Oh, and H. K. Lee <em>Robust DT-CWT Watermarking for DIBR 3 D Images </em> IEEE Trans. On Broadcasting, December 2012, will appear.</p>

    <p>J. W. Lee, M. J. Lee, H. Y. Lee, and H. K. Lee <em>Screenshot Identification by Analysis of Directional Inequality of Integrated Video </em>EURASIP J. on Image and Video, 2012:7, 2 May 2012, DOI 10.1186/1687-5281-2012-7.</p>

    <p>M. J. Lee, D. H. Im, H. Y. Lee, K. S. Kim, and  H. K. Lee,<em>Real-Time Video Watermarking System on the Compressed Domain for High-Definition Video Contents : Practical Issues</em> Academic Press, Digital Signal Processing, USA, Vol. 22, No. 1(January 2012), pp. 190-198.</p>



        <a style={yearStyle} name="sj2011">2011</a>
    <p> J. H. Choi, H. Y. Lee, and H. K. Lee <em>Color Laser Printer Forensics based on Noisy Feature and Support Vector Machine Classifier</em> Springer Netherlands, Multimedia Tools and Applications : An Int. Journal, Netherlands, 2011, will appear.</p>


    <p>I. K. Kang, Gozalo Arce. H. K. Lee,<em>Color Extended Visual Cryptography using Error Diffusion. </em>, IEEE Trans. on Image Processing, USA, Vol. 20, No. 1(Jan. 2011), pp.132-145. ISSN 1057-7149.</p>

    <p>J. C. Joo, T. W. Oh, H. Y. Lee, H. K. Lee,<em>Adaptive Steganographic Method Using the Floor Function with Practical Message Formats. </em>, Int. J. of Innovative Computing, Information and Control, Vol. 7, No. 1(Jan. 2011), pp. 161-175. ISSN 1349-4198.</p>
        <a style={yearStyle} name="sj2010">2010</a>

        <p>T. W. Oh, M. J. Lee, K. S. Kim, H. Y. Lee and H. K. Lee, <em>Robust high-definition video watermarking based on self-synchronizing signal against composite distortions,</em> Optical Engineering, vol. 49, No.9 (September 2010), pp. 1-14.</p>

        <p>M. J. Lee, K. S. Kim, H. K. Lee,<em>Digital Cinema Watermarking for Estimating the Position of the Pirate</em>, IEEE Trans. on Multimedia, USA, Vol. 12, No. 7(November2010), pp.605-621. ISSN 1520-9210. </p>
        
        <p>J. C. Joo, H. K. Lee,<em>Histogram Estimation Scheme based on Steganalysis Defeating the Steganography using Pixel-Value Differencing and Modulus Function. </em>, Optical Engineering, 2010, Vol. 49 (7), 077001 (2010), DOI:10.1117/1.3463021, ISSN 0091-3286. </p>

        <p>J. C. Joo, H. Y. Lee, H. K. Lee,<em>Improved Steganographic Method Preserving Pixel-Value Differencing Histogram with Modulus Function. </em>, EURASIP Journal on Advances in Signal Processing, 2010, Vol. 2010 (June 2010), ISSN 1687-6172. </p>

        <p>Cong-Nguyen Bui, J. C. Joo, H. K. Lee, H. Y. Lee,<em> Steganalysis Method Defeating the Modified Pixel-Value Differencing Steganography. </em>, Int. J. of Innovative Computing, Information and Control, Vol. 6, No. 7 (July 2010), pp. 3193-3203, ISSN 1349-4198. </p>

        <p>K. S. Kim, H. Y. Lee, and H. K. Lee,<em> Spatial Error Concealment Technique for Losslessly  Compressed Images Using Data Hiding in Error-Prone Channels</em>, J. of Communications and Networks, Vol. 12, No. 3(June 2010), pp.37-65.</p>

        <p>D.-H Im, H.-Y. Lee, Y. Hu, H.-K. Lee,<em> Watermarking Curves for Fingerprinting Digital Maps</em>, Int. J. of Innovative Computing, Information and Control, Vol. 6, No. 3(B), March 2010, pp. 1257?1269.</p>

        <p>C.-N Bui, H.-Y. Lee, J.-C. Joo, H.-K. Lee,<em> Secure Bit-plane based Steganography for Secret Communication</em>, to appear in IEICE Trans. on Information and Systems. 2010.</p>

        <a style={yearStyle} name="sj2009">2009</a>

        <p>K.-S. Kim, M.-J. Lee, H.-Y. Lee, H.-K. Lee,<em> Reversible Data Hiding Exploiting Spatial Correlation between Sub-sampled Images</em>, Pattern Recognition, Vol. 42, No. 11 (November 2009), pp. 3083-3096.</p>

        <p>K.-S. Kim, H.-Y. Lee, H.-K. Lee,<em> Supplementary Loss Concealment Technique for Image Transmission through Data Hiding</em>, Multimedia Tools and Applications, Vol. 44, No. 1 (August 2009), pp. 1-16.</p>

        <p>M.-J. Lee, K.-S. Kim, T.-W. Oh, H.-Y. Lee, H.-K. Lee,<em>Improved Watermark Synchronization based on Local Auto-correlation Function</em>, SPIE, Journal of Electronic Imaging, Vol. 18, No. 2 (April-June 2009), pp. 1-11.</p>

        <a style={yearStyle} name="sj2008">2008</a>

        <p>Y. Hu, H.-K. Lee, J. W. Li, <em>DE-based Reversible Data Hiding with Improved Overflow Location Map</em>, IEEE Trans. on Circuits and Systems for Video Technology, Vol. 19, No. 2 (February 2009), pp. 250-260.</p>

        <p>Y. Hu, H.-K. Lee, K. Chen, J. W. Li, <em>Difference Expansion based Reversible Data Hiding Using Two Embedding Directions</em>, IEEE Trans. on Multimedia, Vol. 10, No. 8 (December 2008), pp. 1500-1512.</p>

        <p>D.-H. Im, H.-Y. Lee, S.-J. Ryu, H.-K. Lee, <em>Vector Watermarking Robust to Both Global and Local Geometrical Distortions</em>, IEEE Signal Processing Letters, Vol. 15 (November 2008), pp. 789-792.</p>

        <p>K.-S. Kim, H.-Y. Lee, D.-H. Im, H.-K. Lee, <em>Practical, Real-Time, and Robust Watermarking on the Spatial Domain for High-Definition Video Contents</em>, IEICE Trans. on Information and Systems, Vol. E91-D, No. 5 (May 2008), pp. 1359-1368.</p>

        <a style={yearStyle} name="sj2007">2007</a>

        <p>H.-Y. Lee, D.-H. Im, H.-K. Lee, <em>Error Concealment Technique of Satellite Imagery Transmission through Information Hiding</em>, IEICE Trans. on Information and Systems, Vol. E90-D, No. 11 (November 2007), pp. 1881-1884.</p>

        <p>H.-Y. Lee, H.-K. Lee, <em>Geometrically Invariant Watermarking Synchronization through Circular Hough Transform</em>, Multimedia Tools and Applications, Vol. 34, No. 3 (September 2007), pp. 337.353.</p>

        <a style={yearStyle} name="sj2006">2006</a>

        <p>I. K. Kang, K. Sinha, H.-K. Lee, <em>A New Digital Fingerprint Code Construction Scheme using Group-Divisible Design</em>, IEICE, Trans. on Fundamentals of Electronics, Communications and Computer Sciences, Vol. E89-A, No. 12 (December 2006), pp. 3732-3735.</p>

        <p>H.-Y. Lee, H.-S. Kim, H.-K. Lee, <em>Robust Image Watermarking using Invariant Features</em>, Optical Engineering - The J. of SPIE (The Int. Society for Optical Engineering), USA, Vol. 45, No. 3 (March 2006), pp. 1-11.</p>

        <a style={yearStyle} name="sj2005">2005</a>

       <p>C.-H. Lee, H.-K. Lee, <em>Improved Autocorrelation Function based Watermarking with Side Information</em>, SPIE, J. of Electronic Image, Vol. 14, No. 1 (March 2005), pp. 1-13.</p>

       <p>C.-H. Lee, H.-K. Lee, <em>Geometric Attack Resistant Watermarking in Wavelet Tranform Domain</em>, Optical Society of America, Optics Express, Vol. 13, No. 4 (Feburuary 2005), pp. 1307-1321. </p>

       <p>H.-Y. Lee, I. K. Kang, H.-K. Lee, <em>Hybrid Modulation Technique for Fingerprinting</em>, Int. Signal Processing Society, Int. J. of Signal Processing, Vol. 2, No. 81 (January 2005), pp.321-324.</p>

       <a style={yearStyle} name="sj2004">2004</a>

       <p>Y. Q. Shi, J. Huang, H.-K. Lee, <em>Spread Spectrum Video Data Hiding, Interleaving and Synchronization </em>in Intelligent Watermarking Techniques, World Scientific Publishing Co., (Spring 2004), pp. 515-558, ISBN 9-81238-757-9</p>

       <a style={yearStyle} name="sj2003">2003</a>

       <p>H.-S. Kim, H.-K. Lee, <em>Invariant Image Watermarking Using Zernike Moments,</em> IEEE Trans. on Circuits and Systems for Video Technology, Vol. 13. No. 8 (August 2003), pp. 766-775.</p>

       <p>H.-S. Kim, Y.-J. Baek, H.-K. Lee, <em>Rotation, Scale, and Translation Invariant Watermark using Higher Order Spectra,</em> Optical Engineering - The Journal of SPIE (The International Society for Optical Engineering), U.S.A., Vol. 42, No. 2 (February 2003), pp. 340-349.</p>

       <a style={yearStyle} name="sj2000">2000</a>

       <p>S. suthaharan, S.-W. Kim, H.-S. Kim, H.-K. Lee, K.-R. Rao, <em>Perceptually Tuned Robust Watermarking Scheme for Digital Images, </em>Patern Recognition Letter, Vol. 21, No. 2 (February 2000), pp. 145-149.</p>
       <a style={yearStyle} name="sj1999">1999</a>
       <p>S.-W. Kim, S. suthaharan, H.-K. Lee, K.-R. Rao, <em>An Image Watermarking Scheme using Visual Model and BN Distribution,</em>Electronics Letters - An International Publication, U.K., Vol. 35, No. 3 (February 1999), pp. 212-214.</p>
  </div>

)

const multimediaSsecurityCnf = (
  <div style={{textAlign: 'left'}}>
    <div style={anchorStyle}>
      <a href="#sc2018">2018</a> <a href="#sc2017">2017</a> <a href="#sc2016">2016</a> <a href="#sc2015">2015</a> <a href="#sc2014">2014</a>   <a href="#sc2013">2013</a>  <a href="#sc2012">2012</a> <a href="#sc2011">2011</a>  <a href="#sc2010">2010</a>  <a href="#sc2009">2009</a>  <a href="#sc2008">2008</a>  <a href="#sc2007">2007</a>  <a href="#sc2006">2006</a>  <a href="#sc2005">2005</a>  <a href="#sc2004">2004</a> <a href="#sc2003">2003</a>  <a href="#sc2002">2002</a>  <a href="#sc2000">2000</a>  <a href="#sc1999">1999</a>  <a href="#sc1998">1998</a>
    </div>
    <a style={yearStyle} name="sc2018">2018</a>
        <p>Jihyeon Kang, Sang-Keun Ji, and Heung-Kyu Lee, <em>Spherical Panorama Image Watermarking Using Viewpoint Detection </em>, IWDW 2018, Jeju, Korea</p>
        <p>Jinseok Park, Donghyun Cho, Wonhyuk Ahn, and Heung-Kyu Lee, <em>Double JPEG Detection in Mixed JPEG Quality Factors using Deep Convolutional Neural Network </em>, ECCV 2018, Germany</p>

        <a style={yearStyle} name="sc2017">2017</a>
        <p>In-Jae Yu, Do-Guk Kim, Jin-Seok Park, Jong-Uk Hou, Sunghee Choi, and Heung-Kyu Lee,<em> Identifying Photorealistic Computer Graphics using Convolutional Neural Networks </em>, IEEE Int. Conf. on Image Processing(ICIP 2017), 17-20 September 2017, Beijing, China.</p>
        <p>Jong-Uk Hou, Han-Ul Jang, Jin-Seok Park, and Heung-Kyu Lee,<em> Exposing Digital Forgeries by Detecting a Contextual Violation Using Deep Neural Networks </em>, Proc. of 18th World Conf. on Information Security Applications(WISA 2017), 24-26 August 2017, Jeju Island, Korea</p>
        <p>Jong-Uk Hou, In-Jae Yu, Hyun-Ji Song, and Heung-Kyu Lee,<em> Robust 3D Mesh Watermarking Scheme for an Anti-Collusion Fingerprint Code </em>, Proc. of 18th World Conf. on Information Security Applications(WISA 2017), 24-26 August 2017, Jeju Island, Korea</p>
        <p>Hak-Yeol Choi, Han-Ul Jang, Dongkyu Kim, Jeongho Son, Seung-Min Mun, Sunghee Choi, and Heung-Kyu Lee,<em> Detecting Composite Image Manipulation based on Deep Neural Networks </em>, IEEE &amp; EURASIP, 24th Int. Conf. on Systems, Signals and Image Processing(IWSSIP 2017), 22-24 May 2017, Pozan, Poland.</p>
        <p>Dongkyu Kim, Han-Ul Jang, Hak-Yeol Choi, Jeong-Ho Son, and Heung-Kyu Lee,<em> Improved 3D Mesh Steganlysis Using Homogeneous Kernel Map </em>, Springer-Verlag, 8th iCatse Conf. on Information Science and Applications(ICISA 2017), 20-23 March 2017, Macau, China, pp. 339-346.</p>
        <p>Sang-Keun Ji, Ji-Hyeon Kang, and Heung-Kyu Lee,<em> Perceptual Watermarking for Stereoscopic 3D Image based on Visual Discomfort </em>, Springer-Verlag, 8th iCatse Conf. on Information Science and Applications(ICISA 2017), 20-23 March 2017, Macau, China, pp. 339-346.</p>
        <p>Han-Ul Jang, Hak-Yeol Choi, Dongkyu Kim, Jeong-Ho Son, and Heung-Kyu Lee,<em> Fingerprint Spoof Detection Using Contrast Enhancement and Convolutional Neural Networks </em>, Springer-Verlag, 8th iCatse Conf. on Information Science and Applications(ICISA 2017), 20-23 March 2017, Macau, China, pp. 339-346.</p>
        <p>Hak-Yeol Choi, Han-Ul Jang, Jeong-Ho Son, Dongkyu Kim, and Heung-Kyu Lee,<em> Content Recapture Detection based on Convolution Neural Network </em>, Springer-Verlag, 8th iCatse Conf. on Information Science and Applications(ICISA 2017), 20-23 March 2017, Macau, China, pp. 339-346.</p>

        <a style={yearStyle} name="sc2016">2016</a>
        <p>Hak-Yeol Choi, Jeongho Son, Han-Ul Jang, and Heung-Kyu Lee,<em> Blind 3D Mesh Watermarking based on Sphere-Shape Template </em>, Springer-Verlag, Int. Workshop on Digital-Forensics and Watermarking(IWDW 2016), 17-19 September 2016, Beijing, China</p>
        <p>Jong-Uk Hou, Dongkyu Kim, Hyun-Ji Song, and Heung-Kyu Lee,<em> Secure Image Display through Visual Cryptography: Exploiting Temporal Responsibilities of the Human Eye </em>, Proceedings of the 4th ACM Workshop on Information Hiding and Multimedia Security. ACM, 2016.</p>


       <a style={yearStyle} name="sc2015">2015</a>
        <p>Sang-Keun Ji, Wook-Hyung Kim, Han-Ul Jang, Seung-Min Mun, and H. K. Lee,<em> Robust Imperceptible Video Watermarking for MPEG Compression and DA-AD Conversion Using Visual Masking </em>, Springer-Verlag, Int. Workshop on Digital-Forensics and Watermarking(IWDWï¿½2015), 7-10 October 2015, Tokyo, Japan, pp. </p>


       <a style={yearStyle} name="sc2014">2014</a>
        <p>Jong-Uk Hou, Han-Ul Jang, and H. K. Lee,<em> Hue Modification Estimation Using Sensor Pattern Noise </em>, IEEE,  Int. Conf. on Image Processing(ICIPï¿½2014), 27-30 Oct. 2014, Paris, France, pp. 5287-5291. </p>
        <p>Han-Ul Jang, Dai-Kyung Hyun, Dae-Jin Jung, and H. K. Lee,<em> Fingerprint-PKI Authentication Using Zernike Moments </em>, IEEE, Int. Conf. on Image Processing(ICIPï¿½2014), 27-30 Oct. 2014, Paris, France, pp. 5022-5026. </p>
        <p>Do-Guk Kim and Heung-Kyu Lee,<em> Color Laser Printer Identification Using Photographed Halftone Images </em>, EURASIP, 22th European Signal Processing Conf.(EUSIPCOï¿½2014), 1-5 September 2014, Lisbon, Portugal, pp. </p>
        <p>Jong-Uk Hou, Jin-Seok Park, Seung-Hun Nam, and Heung-Kyu Lee,<em> Robust Video Watermarking for MPEG Compression and DA-AD Conversion </em>, ACM, The 1st Int. Workshop on Information Hiding and Its Criteria for Evaluation(IWIHCï¿½2014), 3 June 2014, Kyoto, Japan, pp. 2-8. </p>      


        <p>J. U. Hou and H. K. Lee,<em> Fast Watermark Synchronization based on Complementary Templates </em>, Engineering Information Institute(EII), Conference on Information Security(CIS2014), 10-12, March, 2014, Suzhou, China, pp. </p>
        <p>H. U. Jang and H. K. Lee,<em> Biometric-PKI Authentication System Using Fingerprint Minutiae </em>, Engineering Information Institute(EII), Conference on Information Security(CIS2014), 10-12, March, 2014, Suzhou, China, pp. </p>
        <p>D. J. Jung and H. K. Lee,<em> Detection of the Single Image from DIBR based on 3D Warping Trace and Edge Matching </em>, Engineering Information Institute(EII), Conference on Information Security(CIS2014), 10-12, March, 2014, Suzhou, China, pp. </p>
        <p>D. K. Hyun and H. K. Lee,<em> A Low-Complexity Mobile Watermarking Scheme Resisting Scale Distortions </em>, Engineering Information Institute(EII), Conference on Information Security(CIS2014), 10-12, March, 2014, Suzhou, China, pp. </p>


       <a style={yearStyle} name="sc2013">2013</a>
        <p>H. D. Kim, H. K. Lee,<em> DIBR 3D Video Watermarking with Faster DT-CWT Quantization </em>, IASTED, Int. Conf. on Signal Processing, Pattern Recognition and Applications(SPPRï¿½2013), 12-14 February 2013, Innsbruck, Austria, pp.</p>

        <p>D. J. Jung, H. K. Lee,<em> User-Generated Pornographic Video Detection Shot-based Sensor Pattern Noise </em>, IASTED, Int. Conf. on Signal Processing, Pattern Recognition and Applications(SPPRï¿½2013), 12-14 February 2013, Innsbruck, Austria, pp.</p>


       <a style={yearStyle} name="sc2012">2012</a>
        <p>S. J. Ryu, H. Y. Lee, and H. K. Lee
        <em> Detection of Content-Aware Image using Seam Properties </em>, 2nd Int. Conf. on Engineering and Technology Innovation(ICETIï¿½2012), 2-6 November 2012, Kaohsiung, Taiwan, pp.</p>
        <p>J. H. Lee, D. K. Hyun, D. J. Jung, and H. K. Lee
        <em> 3D Camera Identification using Correlation Filters </em>, The 4th Int. Conf. on 3D Systems and Applications(3DSAï¿½2012), 25-27 June 2012, Hsinchu, Taiwan, pp.</p>
        <p>H. Y. Choi, D. K. Hyun, and H. K. Lee <em> Detecting Trace of Resampling for Stereoscopic Image </em>, The 4th Int. Conf. on 3D Systems and Applications(3DSAï¿½2012), 25-27 June 2012, Hsinchu, Taiwan, pp.</p>
        <p>C. H. Choi and H. K. Lee
        <em> Detection of the Single Image Leaked from DIBR System based on the Horizontal Neighboring Pixels </em>, The 4th Int. Conf. on 3D Systems and Applications(3DSAï¿½2012), 25-27 June 2012, Hsinchu, Taiwan, pp.</p>
        <p>S. W. Moon, H. D. Kim, and H. K. Lee
        <em> Dual Video Watermarking for CCL Protection and Manipulation Detection </em>, IEEE, Int. Sym. On Circuits and Systems, 20-23 May 2012, Seoul, Korea, pp. </p>
        <p>S. J. Ryu, T. W. Oh, H. Y. Lee, D. J. Jung, H. K. Lee
        <em> Enhancing Detection of Digital Watermark against Resampling Attacks by Analyzing Periodicity of Interpolation </em>, IEEE, Int. Conf. on Systems, Signals and Image Processing(IWSSIPï¿½2012), 11-13 April 2012, Vienna, Austria, pp. , <b>Best Student Paper in Watermarking Field.</b></p>
        <p>D. K. Hyun, S. J. Ryu, M. J. Lee, J. H. Lee, H. Y. Lee, and H. K. Lee
        <em> Source Camcorder Identification with Cropped and Scaled Videos </em>, IS&T/SPIE, Electronic Imaging : Media Watermarking, Security, and Forensics XIV, 22-26 Jan. 2012, Burlingame, CA, USA. </p>
        <p>J. W. Lee, H. D. Kim, H. Y. Choi, S. H. Choi, and H. K. Lee
        <em> Stereoscopic Watermarking by Horizontal Noise Mean Shifting </em>, IS&T/SPIE, Electronic Imaging : Media Watermarking, Security, and Forensics XIV, 22-26 Jan. 2012, Burlingame, CA, USA, pp.  </p>


       <a style={yearStyle} name="sc2011">2011</a>
     <p>D. K. Hyun, M. J. Lee, S. J. Ryu, H. Y. Lee, H. K. Lee <em> Forgery Detection for Surveillance Video </em> Pacific-Rim Conf. on Multimedia(PCMï¿½ï¿½2011), 20-22 December 2011, Sydney, Australia, pp. , <b>Best Student Paper Runner-Up.</b>
 </p>
     <p>C. H. Choi, M. J. Lee, D. K. Hyun, H. K. Lee
 <em> Forged Region Detection for Scanned Images </em> Springer-Verlag, The 3rd Int. Conf. on Computer Science and Its Applications(CSAï¿½ï¿½2011), 12-15 December 2011, Jeju, Korea, pp.687-694.</p>

     <p>D. K. Hyun, C. H. Choi, H. K. Lee
 <em> Camcorder Identification for Heavily Compressed Low Resolution Videos </em> Springer-Verlag, The 3rd Int. Conf. on Computer Science and Its Applications(CSAï¿½ï¿½2011), 12-15 December 2011, Jeju, Korea, pp. 695-701.</p>
     <p>D. J. Jung, H. K. Lee
 <em> Detecting Re-Captured Videos Using Scene-Based Photo Response Non-Uniformity </em> Springer Verlag, 10th Int. Workshop on Digital-Forensics and Watermarking(IWDWï¿½ï¿½2011), 23-26 October 2011, Atlantic City, New Jersey, USA, pp.</p>
     <p>M. J. Lee, J. W. Lee, and H. K. Lee
 <em> Perceptual Watermarking for 3D Stereoscopic Video Using Depth Information </em>  IEEE, the 7th Int. Conf. on Intelligent Information Hiding and Multimedia Signal Processing(IIH-MSPï¿½ï¿½2011), 14-16 October 2011, Dalian, China, pp. 81-84</p>
     <p>J. W. Lee, T. W. Oh, M. J. Lee, H. K. Lee, and H. Y. Lee
 <em>Video Watermarking on Overlay Layer </em>IEEE, the 7th Int. Conf. on Intelligent Information Hiding and Multimedia Signal Processing(IIH-MSPï¿½ï¿½2011), 14-16 October 2011, Dalian, China, pp. 85-88. </p>
     <p>C. H. Choi, J. H. Choi, and H. K. Lee
 <em>CFA Pattern Identification of Digital Cameras Using Intermediate Value Counting,  </em> ACM, the 13th ACM Workshop on Multimedia and Security(MMSECï¿½ï¿½2011), 29-30 September 2011, Buffalo/Niagara Fall, NY, USA, pp. 21-26. </p>


     <p>T. W. Oh, S. J. Ryu, and H. K. Lee
 <em>Invisible Logo Watermarking Using Visualization of Spread Spectrum Signal on High-Definition Video,ï¿½ï¿½   </em> IEEE, 7th Int. Sym. On Image and Signal Processing and Analysis(ISPAï¿½ï¿½2011), 4-6 September 2011, Dubrovnik, Croatia, pp. 218-223.</p>
       <p>H. D. Kim, T. W. Oh, J. W. Lee, and H. K. Lee <em>A Hybrid Watermarking Scheme for CCL-Applied Video Contents. </em>, IEEE, 3rd European Workshop on Visual Information Processing, 4-6 July 2011, Paris, France, pp. 199-204.</p>

       <a style={yearStyle} name="sc2010">2010</a>
       <p>J. C. Joo, T. W. Oh, H. H. Choi, H. K. Lee <em>Steganalysis Scheme Using the Difference Image of Calibrated Sub-sampling,</em>IEEE, the 6th Int. Conf. on Intelligent Information Hiding and Multimedia Signal Processing(IIH-MSP-2010), 15-17 October 2010, Darmstadt, Germany</p>
       
     <p>T. W. Oh, S. J. Ryu, J. W. Lee, H. K. Lee <em>Improved Watermark Estimation Scheme Based on Neighborhood Filter</em>, IEEE, the 6th Int. Conf. on Intelligent Information Hiding and Multimedia Signal Processing(IIH-MSP-2010), 15-17 October 2010, Darmstadt, Germany</p>

       <p>Bei Bei Liu, Yongjian Hu, H. K. Lee <em>Source Camera Identification from Significant Noise Residual Regions,</em> IEEE, Int. Conf. on Image Processing(ICIPï¿½ï¿½2010), 26-29 September 2010, Hong Kong
       </p>

       <p>C. H. Choi, M. J. Lee, H. K. Lee <em>Scanner Identification Using Spectral Noise in the Frequency Domain</em>, IEEE, Int. Conf. on Image Processing(ICIPï¿½ï¿½2010), 26-29 September 2010, Hong Kong</p>
       
     <p>J. H. Choi, H. Y. Lee, H. K. Lee <em>Color Laser Printer Forensics with Noise Texture Analysis</em> The 12th ACM Workshop on Multimedia and Security (ACM MMSEC'2010) September 9-10, Rome, Italy</p>

       <p>J. W. Lee, M. J. Lee, T. W. Oh, S. J. Ryu, H. K. Lee <em>Screenshot Identification Using Combing Artifact from Interlaced Video</em> The 12th ACM Workshop on Multimedia and Security (ACM MMSEC'2010) September 9-10, Rome, Italy</p>

       <p>T. W. Oh, K. S. Kim, H. Y. Lee, J. W. Lee, H. K. Lee <em>Enhancing Perceptual Quality of Watermarked High-Definition Video through Composite Mask</em> IEEE & EURASIP, Int. Conf. on Image Processing Theory, Tools and Application(IPTAï¿½ï¿½2010), 7-10 July 2010, Paris, France</p>

       <p>S. J. Ryu, M. J. Lee, H. K. Lee <em>Detection of Copy-Rotate-Move Forgery using Zernike Moments</em>, Springer Verlag, Information Hiding Workshop(IHWï¿½ï¿½2010), 28-30 June 2010, Calgary, Alberta, Canada</p>

       <p>S. J. Ryu, H. Y. Lee, D. H. Im, J. H. Choi, H. K. Lee <em>Electrophotographic Printer Identification by Halftone Texture Analysis</em>, IEEE, Int. Conf. on Acoustics, Speech and Signal Processing(ICASSPï¿½ï¿½2010), 14-19 March 2010, Dallas, Texas, USA</p>

       <a style={yearStyle} name="sc2009">2009</a>

       <p>M.-J. Lee, K.-S. Kim, H.-K. Lee, <em>Improved Watermark Detection Robust to Camcorder Capture based on Quadrangle Estimation</em>, Proc. of the IEEE Int. Conf. on Image Processing (ICIP 2009), 7-11 November 2009, Cairo, Egypt</p>

       <p>T.-W. Oh, M.-J. Lee, K.-S.m Kim, H.-K. Lee, <em>Spatial Self-Synchronizing Video Watermarking Technique</em>, Proc. of the IEEE Int. Conf. on Image Processing (ICIP 2009), 7-11 November 2009, Cairo, Egypt</p>

       <p>J.-H. Choi, D.-H. Im, H.-Y. Lee, H.-K. Lee, <em>Color Laser Printer Identification by Analyzing Statistical Features on Discrete Wavelet Transform</em>, Proc. of the IEEE Int. Conf. on Image Processing (ICIP 2009), 7-11 November 2009, Cairo, Egypt</p>

       <p>K.-S. Kim, M.-J. Lee, H.-K. Lee, <em>Robust Lossless Data Hiding Based on Block Gravity Center for Selective Authentication</em>, IEEE Int. Conf. on Multimedia & Expo (ICME 2009), 28 June-3 July 2009, New York, USA, pp. 1022-1025.</p>

       <p>M.-J. Lee, K.-S. Kim, H.-K. Lee, <em>Forensic Tracking Watermarking Against In-theater Piracy</em>, The 11th Information Hiding (IH 2009), Lecture Notes in Computer Science, Vol. 5806, 7-10 June 2009, Darmstadt, Germany, pp. 117-131.</p>

       <p>I. K. Kang, Gozalo Arce, H.-K. Lee, <em>Color Extended Visual Cryptography Using Error Diffusion</em>, IEEE Int. Conf. on Acoustics, Speech, and Signal Processing (ICASSP 2009), 19-24 April 2009, Taipei, Taiwan, pp. 1473-1476.</p>

       <a style={yearStyle} name="sc2008">2008</a>

       <p>J.-C. Joo, H.-Y. Lee, B. C. Nguyen, H.-K. Lee, W.-Y. Yoo, <em>Steganalytic Measures for the Steganography Using Pixel-Value Differencing and Modulus Function</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of the Pacific-Rim Conf. on Multimedia (PCM 2008), 9-13 December 2008, Tainan, Taiwan, pp. 476-485.</p>

       <p>S.-J. Ryu, H.-Y. Lee, H.-K. Lee, <em>Document Forgery Detection with SVM Classifier and Image Quality Measures</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of the Pacific-Rim Conf. on Multimedia (PCM 2008), 9-13 December 2008, Tainan, Taiwan, pp. 486-495.</p>

       <p>M.-J. Lee, K.-S. Kim, H.-Y. Lee, T.-W. Oh, H.-K. Lee, Y.-H. Suh, <em>Robust Watermark Detection Against D-A/A-D Conversion for Digital Cinema Using Local Auto-Correlation Function</em>, Proc. of the IEEE Int. Conf. on Image Processing (ICIP 2008), 12-15 October 2008, SanDiego, USA, pp. 425-428.</p>

       <p>K.-S. Kim, M.-J. Lee, H.-K. Lee, <em>Histogram-based Reversible Data Hiding Using Subsampling</em>, The 10th ACM Workshop on Multimedia and Security (ACM MMSEC 2008), 22-23 September 2008, Oxford, UK, pp. 69-74.</p>

       <p>Y. Hu, H.-K. Lee, J. W. Li, <em>Curve Watermarking Technique for Fingerprinting Digital Maps</em>, IEEE the 4rd Int. Conf. on Intelligent Information Hiding and Multimedia Digital Processing (IIH-MSP 2008), 15-17 August 2008, Harbin, China, pp. 223-226.</p>

       <p>Y. Hu, H.-K. Lee, J. W. Li, <em>Reversiable Data Hiding Giving Priority to the Use of Edges and Textures</em>, IET The 5th Int. Conf. on Visual Information Engineering (VIE 2008), 29 July - 1 August 2008, Xian, China, pp. 643-647.</p>

       <p>J.-Y. Kim, D.-H. Im, H.-Y. Lee, and H.-K. Lee, <em>Watermarking Curves Using 2D Mesh Spectral Transforms</em>, IEEE Int. Symp. on Circuits and Systems (ISCAS 2008), 18-21 May 2008, Seattle, Washington, USA, pp. 2969-2972.</p>

       <a style={yearStyle} name="sc2007">2007</a>

       <p>Y. Hu, H.-K. Lee, <em>Reversible Data Hiding Using Prediction Error Values Embedding</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of Int. Workshop on Digital Watermarking (IWDW 2007), Springer-Verlag, 3-5 December 2007, Guangzhou, China, pp. 247-256.</p>

       <p>K.-S. Kim, D.-H. Im, H.-K. Lee, Y.-H. Suh, <em>A Practical Real-Time Video Watermarking Scheme Robust Against Scaling Attack</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of Int. Workshop on Digital Watermarking (IWDW 2007), Springer-Verlag, 3-5 December 2007, Guangzhou, China, pp.328-339.</p>

       <p>K.-S. Kim, M.-J. Lee, H.-K. Lee, <em>Blind Image Watermarking Scheme in DWT-SVD Domain</em>, IEEE The 3rd Int. Conf. on Intelligent Information Hiding and Multimedia Digital Processing (IIH-MSP 2007), 26-28 November 2007, Kaohsiung City, Taiwan, pp. 477-480.</p>

       <a style={yearStyle} name="sc2006">2006</a>

       <p>C.-N Bui, S. M. Yoon, H.-K. Lee, <em>Multi Bit Plane Image Steganography</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of Int. Workshop on Digital Watermarking (IWDW 2006), Springer-Verlag, 8-11 November 2006, Jeju Island, Korea, pp. 61-70.</p>

       <p>I. K. Kang, D.-H. Im, Y.-H. Suh, H.-K. Lee <em>Real-Time Watermark Embedding for High Resolution Video Watermarking</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of Int. Workshop on Security (IWSEC2006), Springer-Verlag, 23-24 October 2006, Kyoto, Japan, pp. 227-238. </p>

       <p>I. K. Kang, D.-H. Im, H.-K. Lee, Y.-H. Suh, <em>Implementation of Real-Time Watermarking Scheme for High Quality Video</em>, The 8th ACM Workshop on Multimedia and Security (ACM MMSEC 2006), 26-27 September 2006, Geneva, Switzerland, pp. 124-129.</p>

       <p>J.-W. Park, C.-H. Lee, H.-K. Lee, <em>A Visual Quality Enhancing Method for Low Frequency</em>, IEE&amp;EURASIP Proc. of Int. Workshop on Image Analysis for Multimedia Interactive Services (WIAMIS 2006), 19-21 April 2006, Incheon, Korea, pp. 49-52.</p>

       <p>H.-Y. Lee, H.-K. Lee, <em>Copyright Protection through Feature-based Watermarking Using Scale-Invariant Keypoints</em>, IEEE Proc. of Consumer Electronics (ICCE 2006), 9-11 January 2006, Las Vegas, USA, pp. 225-226.</p>

       <a style={yearStyle} name="sc2005">2005</a>

       <p>H.-Y. Lee, C.-H. Lee, H.-K. Lee, J.-H. Nam, <em>Feature-based Image Watermarking Method using Scale-Invariant Keypoints</em>, in Lecture Notes in Computer Science (LNCS) : Proc. of Pacific-Rim Conf. on Multimedia (PCM 2005), 13-16 November 2005, Jeju Island, Korea, pp. 312-324.</p>

       <p>H.-Y. Lee, I. K. Kang, H.-K. Lee, Y.-H. Suh, <em>Evaulation of Feature Extraction Techniques for Robust Watermarking</em>, in Lecture Notes in Computer Science (LNCS) 3710 : Digital Watermarking, Springer-Verlag, 15-17 September 2005, Siena, Italy, pp. 418-431.</p>

       <p>I. K. Kang, H.-Y. Lee, H.-K. Lee, W.-Y. Yoo, <em>Zero-Based Code Modulation Technique for Digital Video Fingerprinting</em>, in Lecture Notes in AI (LNAI/LNCS) 3683 : Intelligent Information Hiding and Multimedia Signal Processing (IIH-MSP 2005), Springer-Verlag, 14-16 September 2005, Melbourne, Australia, pp. 1108-1114.</p>

       <p>H.-Y. Lee, I. K. Kang, H.-K. Lee, J.-S. Lee, <em>Comparison of Feature Extraction Techniques for Watermark Synchronization</em>, in Lecture Notes in AI (LNAI/LNCS) 3684 : Intelligent Information Hiding and Multimedia Signal Processing (IIH-MSP 2005), Springer-Verlag, 14-16 September 2005, Melbourne, Australia, pp. 309-316.</p>

       <p>J.-T. Kim, H.-K. Lee, <em>Optimal Watermarking Rate Allocation in Variable Bit-Rate Compression</em>, SPIE, VCIP(Visual Communication and Image Processing)2005, 12-15 July 2005, Beijing China, pp. 1490-1498</p>

       <p>I. K. Kang, H.-K. Lee, <em>Average Attack Resilient Video Fingerprinting</em>, IEEE, International Symposium on Circuits and Systems (ISCAS 2005), 23-26 May 2005, Kobe, Japan, pp. 5529-5532.</p>

      <a style={yearStyle} name="sc2004">2004</a>

       <p>H.-Y. Lee, I. K. Kang, H.-K. Lee, <em>Hybrid Modulation Technique for Fingerprinting</em>, Proc. of Int. Conf. on Signal Processing, 17-19 December 2004, Istanbul, Turkey, pp. 321-324.</p>

       <p>J.-T. Kim, C.-H. Lee, H.-Y. Lee, H.-K. Lee, W.-G. Oh, <em>Technical Challenges of Persistent Association Technology for Ubiquitous Multimedia</em>, 14th Int. Conf. on Artificial Reality and Telexistence (ICAT 2004), 30 November - 2 December 2004, Seoul, Korea, pp. 177-180. </p>

       <p>J.-T. Kim, B. C. Nguyen, H.-K. Lee, B.-H. Choi, <em>Scalable Insertion of Persistant Association Data for Ubiquitous Multimedia</em>, 14th Int. Conf. on Artificial Reality and Telexistence (ICAT 2004), 30 November - 2 December 2004, Seoul, Korea, pp. 477-480. </p>

       <p>C.-N Bui, J.-T. Kim, H.-K. Lee, <em>Enhanced Visual Quality and Capacity of Steganography Algorithm</em>, Proc. Pacific Rim Workshop on Steganography, 17-18 November 2004, Fukuoka, Japan, pp. 14-17.</p>

       <p>H.-Y. Lee, J.-T. Kim, H.-K. Lee, Y.-H. Suh, <em>Content-based Synchronization using the Local Invariant Feature for Robust Watermarking</em>, in Lecture Notes in Computer Science (LNCS) 3325 : Information Securities, Springer-Verlag, 23-25 August 2004, Jeju Island, Korea, pp. 122-134.</p>

       <a style={yearStyle} name="sc2003">2003</a>

       <p>C.-H. Lee, H.-K. Lee, Y.-H. Suh, <em>Autocorrelation Function-based Watermarking with Side Information</em>, IS&amp;T/SPIE, 15th Annual Symposium Electronic Imaging Science and Technology : Security and Watermarking of Multimedia Contents, 20-24 January 2003, San Jose, USA, pp. 349-358.</p>

       <a style={yearStyle} name="sc2002">2002</a>

       <p>D. Jiang, H.-K. Lee, Y.-H. Suh, <em>BSS: A New Approach for Watermark Attack</em>, IEEE 4th International Symposium on Multimedia Software Engineering (MSE'2002), December 11-13, 2002, Newport Beach, California, USA.</p>

       <p>D. Jiang, H.-K. Lee, <em>Watermark Attack Based on Blind Estimation without Priors</em>, Proc. Int. Workshop on Digital Watermarking (IWDW 2002), 21-22 November 2002, Seoul, Korea.</p>

       <p>H.-S. Kim, H.-K. Lee, Y.-H. Suh, <em>Robust Image Watermarking Using Radon Transform and Bispectrum Invariants, </em>in Lecture Notes in Computer Science (LNCS): Information Hiding, Springer-Verlag, Proc. of 5th Int. Workshop on Information Hiding (IH 2002), 7-9 October, 2002, Noordwijkerhout, Netherland</p>

       <a style={yearStyle} name="sc2000">2000</a>

       <p>H.-S. Oh, H.-S. Oh, H.-K. Lee, <em>Digital Image Watermarking in Human Face Region, </em>SPIE, Electronic Imaging 2000, Vol. 3972, January 2000, San Jose, U.S.A.</p>

       <p>C.-H. Lee, H.-S. Oh, H.-K. Lee, <em>Adaptive Video Watermarking using Motion Information, </em>SPIE, Electronic Imaging 2000, Vol. 3972, January 2000, San Jose, U.S.A.</p>

       <a style={yearStyle} name="sc1999">1999</a>

       <p>C.-H. Lee, H.-S. Oh, Y.-J. Baek, H.-K. Lee, <em>Adaptive Digital Image Watermarking using Variable Size of Blocks in Frequency Domain, </em>IEEE, Proc. of TENCON 1999, 15-17 September 1999, Cheju, Korea, pp. 702-705.</p>

       <p>S. Suthaharan, S.-W. Kim, S. Sathananthan, H.-K. Lee, K.-R. Rao, <em>Perceptually Tuned Video Watermarking Scheme using Motion Entropy Masking, </em>IEEE, Proc. of TENCON 1999, 15-17 September 1999, Cheju, Korea, pp. 182-185.</p>

       <p>S.-W. Kim, H.-K. Lee, S. Suthaharan, K.-R. Rao, <em>Perceptually Tuned Robust Watermarking Scheme Digital Video using Motion Entropy Masking, </em>IEEE, Proc. of the Int. Conf. on Consumer Electronics (ICCE 2002), 22-24 June 1999, Los Angeles, U.S.A, pp. 104-105.</p>

       <p>H.-S. Kim, H.-S. Oh, H.-K. Lee, Y.-J. Baek, <em>A Robust Watermarking Method for High Quality Images, </em>IEEE, Proc. of the Int. Conf. on Consumer Electronics (ICCE 1999), 22-24 June 1999, Los Angeles, U.S.A, pp. 106-107.</p>

       <a style={yearStyle} name="sc1998">1998</a>

       <p>S.-W. Kim, S. Suthaharan, H.-K. Lee, and K.-R. Rao, <em>A Watermarking Scheme using Human Visual System Model and BN Distribution,</em>IEEE 6th Int. Workshop on Intelligent Signal Processing and Communication Systems (ISPACS 1998), 4-6 November 1998, Melbourne, Australia.</p>
  </div>
)

export default {multimediaSecurityInt, multimediaSsecurityCnf};
